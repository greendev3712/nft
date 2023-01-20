import madisen from "../../images/marketplace/offerCards/players/Madisen_Manning_common.webp"

export const admins = [
  {
    id: 1,
    email: "aa123dil@example.com",
    walletAddress: "0x275d9A356238aDc4D895DcdCB8a12d527b7C4a84",
    isAdmin: true,
    smartContactsFunctions: {
      mint: true,
      transfer: true,
      approve: true,
      transferFrom: true,
      burn: true,
      transferTo: false,
    },
  },
  {
    id: 2,
    email: "marios@example.com",
    walletAddress: "0x275d9A356238aDc4D895DcsdfB8a12d527b7C443",
    isAdmin: true,
    smartContactsFunctions: {
      mint: true,
      transfer: false,
      approve: false,
      transferFrom: false,
      burn: true,
      transferTo: true,
    },
  },
  {
    id: 3,
    email: "kevin@example.com",
    walletAddress: "0x275d9A356238aDc4D895DcdCB8a12d527b7Cfi91",
    isAdmin: true,
    smartContactsFunctions: {
      mint: true,
      transfer: false,
      approve: false,
      transferFrom: false,
      burn: false,
    },
  },
]

export const dummyData = {
  userImage: madisen,
  userName: "Madisen Manning",
  tokenValue: "0.055",
  tokenValueUSD: "$6 564,23",
  role: "Super Admin",
}
