[blockchain basics](https://youtu.be/amAq-WHAFs8?si=7kX-nLB-IQIkr1qi&t=307)

- Smart contracts are programs that run on the blockchain instead of any other cloud provider & can execute transactions and interact with other smart contracts. Instead of invoking from requests they invoke from instructions and rather than sending responses back they write their changes to the blockchain where anyone can read them. 

[Cryptography](https://youtu.be/amAq-WHAFs8?si=0PoY0wn3MIo5vqLE&t=387)


- Public key used as an address to transact with the person who's that public key is associated with
- Private key used to sign the transactions, to prove that the person who's that public key is associated with signed the transaction. 


- so basically notion of wallet in blockchain -> a wallet is just a private key with some solana in it. 

- In solana, smart contacts can store additional data in PDA's (Program Derived Address), PDA address not made form public key instead they made from seeds, and seeds are basically a random string of characters that are used to generate the PDA address.\
So solana PDA's are a type of key value store. 


Anchor -> Rust Framework to make solana programs

[A simple programs/contracts using Rust Anchor framework](https://youtu.be/amAq-WHAFs8?si=_nYJJRURpuvC7ham&t=717)