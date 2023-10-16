const web3 = require("web3")
const RLP = require('rlp');

// Configure
const validators = [
  
   {
     "consensusAddr": "0xb94B7b7869dbe1Ca81d2c951A315ae71156A5dFA",
   },
   {
     "consensusAddr": "0xb3c5BebB9Bafb5aAA3C815a2C9a3146eB5F2E5D2",
   },
   {
     "consensusAddr": "0x57989b83413eAb25c3f0e6c9AA823Fe520Ad700D",
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