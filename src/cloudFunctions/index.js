HOLD_USER = {}
const SUPER_ADMIN = "TuqEwvBGt1jcCvHW81Xyn5qL"
Moralis.Cloud.define("getUsers", async (request) => {
  const query = new Moralis.Query("_User", { useMasterKey: true })
  const results = await query.find({ useMasterKey: true })
  return results
})

Moralis.Cloud.define("setApiRateLimit", async () => {
  await Moralis.settings.setAPIRateLimit({
    anonymous: 3500,
    authenticated: 3500,
    windowMs: 60000,
  })
})

Moralis.Cloud.define("getSuperAdminTokens", async (request) => {
  const superAdminAddress = request.params.superAdminAddress
  const options = { chain: "binance testnet", address: superAdminAddress }
  const balance = await Moralis.Web3API.account.getTokenBalances(options)
  return balance
})

Moralis.Cloud.define("setHoldUser", (request) => {
  const userId = request.params.userId
  HOLD_USER[userId] = request.params.flag
})

Moralis.Cloud.define("getHoldUser", (request) => {
  const userId = request.params.userId
  return HOLD_USER[userId]
})

Moralis.Cloud.define("getAllNFTs", async (request) => {
  let nListedNfts = []
  const options = request.params.options
  // const list = request.params.list
  let addresses = []
  const fetchNFT = async () => {
    const users = await Moralis.Cloud.run("getUsers")
    for (let i = 0; i < users.length; i++) {
      if (users[i]?.attributes.accounts) {
        addresses = addresses.concat(users[i]?.attributes.accounts)
      }
    }
    for (let i = 0; i < addresses.length; i++) {
      if (addresses[i] != null) {
        const mOpt = {
          chain: options.chain,
          address: addresses[i],
          token_addresses: options.token_addresses,
        }
        const tmp = await Moralis.Web3API.account.getNFTs(mOpt)
        nListedNfts = nListedNfts.concat(tmp.result)
      }
    }
    return nListedNfts
  }
  return await fetchNFT()
  // if (list === "nList") {
  //   return await abc()
  // } else {
  //   options.address = request.params.marketAddress
  //   let yListedNfts = await Moralis.Web3API.account.getNFTs(options)
  //   return list === null
  //     ? yListedNfts.result.concat(await abc())
  //     : yListedNfts.result
  // }
})

Moralis.Cloud.define("getAdmin", async (request) => {
  const query = new Moralis.Query("_User", { useMasterKey: true })
  query.equalTo("isAdmin", true)
  const results = await query.find({ useMasterKey: true })
  return results
})

Moralis.Cloud.define("setAdmin", async (request) => {
  const query = new Moralis.Query("_User", { useMasterKey: true })
  query.equalTo("ethAddress", request.params.ethAddress)
  const user = await query.first({ useMasterKey: true })
  if (user) {
    user.set("isAdmin", true)
    user.save(null, { useMasterKey: true })
    return true
  }
})

Moralis.Cloud.define("unsetAdmin", async (request) => {
  const query = new Moralis.Query("_User", { useMasterKey: true })
  query.equalTo("ethAddress", request.params.ethAddress)
  const user = await query.first({ useMasterKey: true })
  if (user) {
    user.set("isAdmin", false)
    user.save(null, { useMasterKey: true })
    return true
  }
})

Moralis.Cloud.define("searchEmail", async (request) => {
  const query = new Moralis.Query("_User", { useMasterKey: true })
  query
    .notEqualTo("ethAddress", request.params.ethAddress)
    .equalTo("email", request.params.email)
  const user = await query.find({ useMasterKey: true })
  if (user.length > 0) return true
  else return false
})

Moralis.Cloud.define("deleteRecord", async (request) => {
  const query = new Moralis.Query("_User", { userMasterKey: true })
  query.equalTo("objectId", request.params.id)
  const user = await query.first({ useMasterKey: true })

  if (user) {
    user.destroy({ useMasterKey: true })
    const query1 = new Moralis.Query("_EthAddress", { userMasterKey: true })
    query1.equalTo("objectId", user.attributes.ethAddress)
    const eth = await query1.first({ useMasterKey: true })
    if (eth) {
      eth.destroy({ useMasterKey: true })
      return true
    }
  }
})

Moralis.Cloud.define("addEmail", async (request) => {
  const query = new Moralis.Query("_User", { userMasterKey: true })
  query.equalTo("objectId", request.params.id)
  const user = await query.first({ useMasterKey: true })
  if (user) {
    user.set("email", request.params.email)
    user.save(null, { useMasterKey: true })
    return true
  }
})

Moralis.Cloud.beforeSave("Mint721", async (request) => {
  const confirmed = request.object.get("confirmed")
  if (confirmed) {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("minter")
    const query = new Moralis.Query("_User", { userMasterKey: true })
    query.equalTo("accounts", ethAddress)
    const user = await query.first({ useMasterKey: true })
    const users = { [SUPER_ADMIN]: false, [user?.id]: false }
    const Collection = Moralis.Object.extend("Notification", {
      userMasterKey: true,
    })
    const notification = new Collection()
    notification.set("title", `New NFT is minted`)
    notification.set(
      "description",
      `${
        user?.attributes.nickname || ethAddress
      } have minted new NFT at ${d.getHours()}:${d.getMinutes()}.`,
    )
    notification.set("users", users)
    notification.save(null, { userMasterKey: true })
  }
})

Moralis.Cloud.beforeSave("Mint1155", async (request) => {
  const confirmed = request.object.get("confirmed")
  if (confirmed) {
    const d = new Date(Date.now())
    const ethAddress = request.object.get("minter")
    const query = new Moralis.Query("_User", { userMasterKey: true })
    query.equalTo("accounts", ethAddress)
    const user = await query.first({ useMasterKey: true })
    const users = { [SUPER_ADMIN]: false, [user?.id]: false }
    const Collection = Moralis.Object.extend("Notification", {
      userMasterKey: true,
    })
    const notification = new Collection()
    notification.set("title", `New NFT is minted`)
    notification.set(
      "description",
      `${
        user?.attributes.nickname || ethAddress
      } have minted new NFT at ${d.getHours()}:${d.getMinutes()}.`,
    )
    notification.set("users", users)
    notification.save(null, { userMasterKey: true })
  }
})

Moralis.Cloud.define("removeReader", (request) => {
  const userId = request.params.userId
  const msgIds = request.params.msgIds
  msgIds.forEach(async (msgId) => {
    const query = new Moralis.Query("Notification", { useMasterKey: true })
    query.equalTo("objectId", msgId)
    const msgData = await query.find({ useMasterKey: true })
    msgData.forEach((item) => {
      let obj = item.attributes.users
      obj[userId] = true
      item.set("users", obj)
      item.save(null, { useMasterKey: true })
    })
  })
})

Moralis.Cloud.define("getUnReadMsg", async (request) => {
  const userId = request.params.userId
  const query = new Moralis.Query("Notification", { useMasterKey: true })
  const allData = await query.find({ useMasterKey: true })
  const d = new Date(Date.now())
  const filter = (item) =>
    (d.getFullYear() === item.attributes.createdAt.getFullYear() &&
      d.getMonth() === item.attributes.createdAt.getMonth() &&
      d.getDate() === item.attributes.createdAt.getDate() &&
      item.attributes.users[userId] === true) ||
    item.attributes.users[userId] === false
  const unReadMsg = allData.filter(filter)
  return unReadMsg
})

Moralis.Cloud.define("saveTempFile", async (request) => {
  const { email, address, token, amount, token_amount } = request.params
  const Collection = Moralis.Object.extend("StripTemp", {
    userMasterKey: true,
  })
  const stripTemp = new Collection()
  stripTemp.set("email", email)
  stripTemp.set("address", address)
  stripTemp.set("token", token)
  stripTemp.set("amount", amount)
  stripTemp.set("token_amount", token_amount)
  stripTemp.save(null, { useMasterKey: true })
})

Moralis.Cloud.define("getTempFile", async (request) => {
  const { token } = request.params
  const query = new Moralis.Query("StripTemp", { useMasterKey: true })
  query.equalTo("token", token)
  query.equalTo("isDeleted", 2)
  return await query.first({ useMasterKey: true })
})

Moralis.Cloud.define("deleteTempFile", async (request) => {
  const { id } = request.params
  const query = new Moralis.Query("StripTemp", { useMasterKey: true })
  query.equalTo("objectId", id)
  const result = await query.first({ useMasterKey: true })
  result.set("isDeleted", 1)
  result.save(null, { useMasterKey: true })
})

Moralis.Cloud.define("fetchNFTMetadata", async (request) => {
  return await Moralis.Cloud.httpRequest({ url: request.params.url })
})

Moralis.Cloud.define("createOffer", (request) => {
  const { name, endAt, fullPrice, discount, ERC721, ERC1155 } = request.params
  const Collection = Moralis.Object.extend("Offers", {
    userMasterKey: true,
  })
  const offer = new Collection()
  offer.set("name", name)
  offer.set("endAt", endAt)
  offer.set("fullPrice", fullPrice)
  offer.set("discount", discount)
  offer.set("ERC721", ERC721)
  offer.set("ERC1155", ERC1155)
  offer.save(null, { useMasterKey: true })
})

Moralis.Cloud.define("getOffers", async (request) => {
  const { isFullOffer } = request.params
  const query = new Moralis.Query("Offers", { useMasterKey: true })
  const rows = await query.find({ useMasterKey: true })
  return rows.filter((item) => {
    return isFullOffer
      ? item.attributes.ERC721.length + item.attributes.ERC1155.length >= 5
      : item.attributes.ERC721.length + item.attributes.ERC1155.length < 5
  })
})

Moralis.Cloud.define("setOffers", async (request) => {
  const { id, tokenId, isERC721 } = request.params
  const query = new Moralis.Query("Offers", { useMasterKey: true })
  query.equalTo("objectId", id)
  const row = await query.first({ useMasterKey: true })
  const arrValue = isERC721 ? row.attributes.ERC721 : row.attributes.ERC1155
  arrValue.push(tokenId)
  row.set(isERC721 ? "ERC721" : "ERC1155", arrValue)
  row.save(null, { useMasterKey: true })
})

Moralis.Cloud.define("isOfferNFT", async (request) => {
  const { tokenId, isERC721 } = request.params
  const query = new Moralis.Query("Offers", { useMasterKey: true })
  query.equalTo(isERC721 ? "ERC721" : "ERC1155", tokenId)
  const result = await query.first({ useMasterKey: true })
  return result ? true : false
})

Moralis.Cloud.define("removeItemFromOffers", async (request) => {
  const { isERC721, id } = request.params
  const query = new Moralis.Query("Offers", { useMasterKey: true })
  query.equalTo(isERC721 ? "ERC721" : "ERC1155", id)
  const row = await query.first({ useMasterKey: true })
  const arr = isERC721 ? row.attributes.ERC721 : row.attributes.ERC1155
  const index = arr.indexOf(id)
  if (index > -1) {
    arr.splice(index, 1)
  }
  row.set(isERC721 ? "ERC721" : "ERC1155", arr)
  row.save(null, { useMasterKey: true })
})

Moralis.Cloud.define("getUserById", async (request) => {
  const id = request.params.id
  const query = new Moralis.Query("_User", { useMasterKey: true })
  query.equalTo("objectId", id)
  return await query.first({ useMasterKey: true })
})

Moralis.Cloud.define("fetchTransfer", async (request) => {
  // const { options } = request.params
  const query721 = new Moralis.Query("Transfer721to", { useMasterKey: true })
  const query1155 = new Moralis.Query("Transfer1155to", { useMasterKey: true })
  const data_721 = await query721.find({ useMasterKey: true })
  const data_1155 = await query1155.find({ useMasterKey: true })
  return { data_721, data_1155 }
})
