const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function partitionKeyToString(event) {
  let partitionKey = event.partitionKey; 

  if (typeof event.partitionKey !== "string") {
    partitionKey = JSON.stringify(event.partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = crypto.createHash("sha3-512").update(partitionKey).digest("hex");
  }

  return partitionKey;
}

exports.deterministicPartitionKey = (event) => {
  if (event) {
    if (event.partitionKey) {
     return partitionKeyToString(event);
    }

    const data = JSON.stringify(event);

    return crypto.createHash("sha3-512").update(data).digest("hex");  
  }

  return TRIVIAL_PARTITION_KEY;
};

