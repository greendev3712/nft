import styled from "styled-components"
import DT from "../../static/design-token.json"

export const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  align-items: flex-start;
  margin-left: 10px;
  background-color: white;
  border-radius: 5px;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`

export const ChatLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem;
  justify-content: flex-start;
  ::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #e7e9ed;
  padding: 1rem;
  padding-left: 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ChatRightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-left: 1rem;
  justify-content: space-between;
  background-color: aliceblue;
  border-raius: 10px;
  border-left: 3px solid #e7e9ed;
  // padding:  0 25px 0 25px;
  ::-webkit-scrollbar {
    width: 0; /* Safari and Chrome */
  }
`

export const EmptyRightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border-left: 3px solid #e7e9ed;
`

export const BoxTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #3985f5;
  padding: 0.8rem;
  text-transform: uppercase;
  background-color: rgba(47, 133, 245, 0.2);
  border-radius: 30px;
  word-break: break-all;

  @media screen and (max-width: 992px) {
    font-size: 14px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  // border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e7e9ed;
  }
`

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: auto;
`

export const User = styled.button`
  font-size: large;
  font-weight: bold;
  color: #242424;
  margin-bottom: 1.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  word-break: break-all;

  @media screen and (max-width: 992px) {
    font-size: 12px;
  }
`
export const ChatContainerHeader = styled.h1`
  font-size: large;
  font-weight: bold;
  color: #242424;
  margin-bottom: 1.2rem;
  padding: 1rem;
  text-decoration: underline;
  text-underline-offset: 10px;
`
export const ChatTextInput = styled.input`
  outline: none;
  width: 90%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: large;
`
export const ChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`
export const ChatSendButton = styled.button`
  outline: none;
  background-color: #242424;
  border-radius: 5px;
  border: none;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  cursor: pointer;
`
export const Chats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 40px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`
export const YourMessage = styled.div`
  align-self: flex-end;
  background-color: #d2dfff;
  color: #121113;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  border-bottom: 1px solid #e7e9ed;
  margin: 0px 25px 5px 25px;
`
export const OtherMessage = styled.div`
  align-self: flex-start;
  background-color: #ffffff;
  color: #121113;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  margin: 0px 25px 5px 25px;
`
