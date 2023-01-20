import React, { useState, useEffect, useMemo, useCallback } from "react"
import { useMoralis, useMoralisQuery } from "react-moralis"
import {
  BoxTitle,
  ChatContainer,
  ChatContainerHeader,
  ChatForm,
  ChatLeftContainer,
  ChatRightContainer,
  Chats,
  EmptyRightContainer,
  OtherMessage,
  SearchInput,
  User,
  UserContainer,
  YourMessage,
} from "./styles"
import { truncate } from "utils/formatAddress"
import profileImage from "../../images/avatar.png"
import { Avatar, Input, Button } from "antd"
import {
  SmileOutlined,
  PaperClipOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons"
import { useMedia } from "hooks/useMedia"

const Chat = ({ moralis }) => {
  const { user, Moralis } = useMoralis()
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const [receiver, setReceiver] = useState({})
  const [onceLoad, setOnceLoad] = useState(true)
  const [searchKey, setSearchKey] = useState("")
  const { data: messagesData } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [],
    {
      live: true,
    },
  )

  const isMobile = useMedia("(max-width: 640px)")

  const fetchUsers = useCallback(async () => {
    const users = await moralis?.fn.Cloud.run("getUsers")
    let result
    if (searchKey === "")
      result = users.filter((item) => {
        return item.attributes.ethAddress !== user?.attributes.ethAddress
      })
    else
      result = users.filter((item) => {
        return (
          item.attributes.ethAddress &&
          item.attributes.nickname &&
          (item.attributes.ethAddress === searchKey.toLowerCase() ||
            item.attributes.nickname.search(searchKey) !== -1) &&
          item.attributes.ethAddress !== user?.attributes.ethAddress
        )
      })
    setUsers(result)
  }, [moralis, searchKey, user?.attributes.ethAddress])

  useEffect(() => {
    if (moralis && onceLoad) {
      fetchUsers()
      setOnceLoad(false)
    }
  }, [moralis, onceLoad, fetchUsers])

  useEffect(() => {
    if (moralis) fetchUsers()
  }, [searchKey, fetchUsers, moralis])

  useMemo(() => {
    let arr = []
    messagesData.map((message) => {
      if (
        (message?.attributes.ethAddress === user?.attributes.ethAddress &&
          message?.attributes.receiver === receiver?.ethAddress) ||
        (message?.attributes.ethAddress === receiver?.ethAddress &&
          message?.attributes.receiver === user?.attributes.ethAddress)
      ) {
        arr.push(message?.attributes)
      }
    })
    setMessages(arr)
  }, [user, receiver, messagesData])
  const sendMessage = (e) => {
    e.preventDefault()
    if (message.length <= 0) return
    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()
    messages
      .save({
        message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
        receiver: receiver?.ethAddress,
      })
      .then(() => {
        setMessage("")
        // endOfMessageRef?.current?.scrollIntoView({ behavior: "smooth" })
      })
      .catch((err) => console.log(err))
  }

  const handleSearch = (e) => {
    if (e.keyCode === 13 || e.target.value === "") {
      setSearchKey(e.target.value)
    }
  }

  return (
    <>
      <ChatContainer>
        <ChatLeftContainer>
          {/* //! Insert value and onChange here depending on the search input */}
          <SearchInput onKeyUp={handleSearch} placeholder="Search" />
          {users.map((userData, idx) => {
            const user = userData.attributes
            return (
              <UserContainer
                onClick={() => {
                  setReceiver(user)
                }}
                style={{ justifyContent: "flex-start" }}
                key={idx}
              >
                {/* <UserImage src={user?.profile_picture || profileImage} /> */}
                <Avatar
                  src={user?.profile_picture || profileImage}
                  style={{
                    width: !isMobile ? "3rem" : "1.5rem",
                    height: !isMobile ? "3rem" : "1.5rem",
                  }}
                />
                <User style={{ marginLeft: "20px" }}>
                  {user.nickname
                    ? user.nickname
                    : user.accounts
                    ? truncate(user?.accounts[0])
                    : user.username}
                </User>
              </UserContainer>
            )
          })}
        </ChatLeftContainer>
        {receiver?.username ? (
          <>
            <ChatRightContainer>
              <ChatContainerHeader>
                Your Chat with{" "}
                {receiver.nickname
                  ? receiver.nickname
                  : receiver.accounts
                  ? truncate(receiver?.accounts[0])
                  : receiver.username}
              </ChatContainerHeader>
              <Chats>
                {messages.map((message, idx) => (
                  <>
                    {message.ethAddress === user?.attributes.ethAddress ? (
                      <YourMessage key={idx}>{message.message}</YourMessage>
                    ) : (
                      <OtherMessage key={idx}>{message.message}</OtherMessage>
                    )}
                  </>
                ))}
              </Chats>
              <ChatForm>
                <Input
                  placeholder="Write to us"
                  size="large"
                  value={message}
                  className="noBorder"
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  suffix={
                    <>
                      <Button
                        className="noBorder"
                        shape="circle"
                        icon={<SmileOutlined />}
                      />
                      <Button
                        className="noBorder"
                        shape="circle"
                        icon={<PaperClipOutlined />}
                      />
                      <Button
                        shape="circle"
                        onClick={sendMessage}
                        icon={<ArrowRightOutlined />}
                      />
                    </>
                  }
                />
              </ChatForm>
            </ChatRightContainer>
          </>
        ) : (
          <EmptyRightContainer>
            <BoxTitle>Choose who you would like to write to</BoxTitle>
          </EmptyRightContainer>
        )}
      </ChatContainer>
    </>
  )
}

export default Chat
