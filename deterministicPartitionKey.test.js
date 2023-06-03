const { deterministicPartitionKey } = require("./deterministicPartitionKey");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the candidate equals '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the candidate when event without partitionKey exists", () => {
    const trivialKey = deterministicPartitionKey({ name: 'example' });
    expect(trivialKey).toBe("4d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a0");
  });

  it("Returns the candidate when event with partitionKey exists", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 'abc' });
    expect(trivialKey).toBe("abc");
  });

  it("Returns the candidate when event with partitionKey is not string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });

  it("Returns the candidate when max partitionkey is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "4d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a04d3c04929ba80b061d4e49848a61448ab34cd2821b6d2329ce6fa51fa465aa2910f7fd5589a15acebb47304298fac760409b4d80cbeec308da3e2fce223091a0" });
    expect(trivialKey).toBe("c91b3c1c69247833d5b90a48a5fdb16d4f0b347c5925ef170153cd2f07505808b563b09f7c275657f4e38be0c8b6a572f7a94e170874ccf907a3c7d126a59967");
  });
});
