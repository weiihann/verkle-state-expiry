const web3 = require("web3")
const init_holders = [
  {
     address: "0xb94B7b7869dbe1Ca81d2c951A315ae71156A5dFA",
     balance: web3.utils.toBN("500000000000000000000000000").toString("hex") // 500000000e18
  }
];


exports = module.exports = init_holders
