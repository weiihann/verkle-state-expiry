const web3 = require("web3")
const RLP = require('rlp');

// Configure
const validators = [
  
   {
     "consensusAddr": "0x81B4924B3E5B22c2A8AF17a3f171A2c636b898BE",
   },
   {
     "consensusAddr": "0x1126eAB975333D7A58B5Ca07A50d747435c76800",
   },
   {
     "consensusAddr": "0xB6866c824375FBc4D6D60b35671E4E801F5Ae9b5",
   },
];

// ===============  Do not edit below ====
function generateExtradata(validators) {
  let extraVanity =Buffer.alloc(32);
  let validatorsBytes = extraDataSerialize(validators);
  let extraSeal =Buffer.alloc(65);
  return Buffer.concat([extraVanity,validatorsBytes,extraSeal]);
}

function extraDataSerialize(validators) {
  let n = validators.length;
  let arr = [];
  for (let i = 0;i<n;i++) {
    let validator = validators[i];
    arr.push(Buffer.from(web3.utils.hexToBytes(validator.consensusAddr)));
  }
  return Buffer.concat(arr);
}

extraValidatorBytes = generateExtradata(validators);

exports = module.exports = {
  extraValidatorBytes: extraValidatorBytes,
}