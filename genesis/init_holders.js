const web3 = require("web3")
const init_holders = [
  {
     address: "0x81B4924B3E5B22c2A8AF17a3f171A2c636b898BE",
     balance: web3.utils.toBN("500000000000000000000000000").toString("hex") // 500000000e18
  }
];


exports = module.exports = init_holders
