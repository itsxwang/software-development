[blockchain basics](https://youtu.be/amAq-WHAFs8?si=7kX-nLB-IQIkr1qi&t=307)

- Smart contracts are programs that run on the blockchain instead of any other cloud provider & can execute transactions and interact with other smart contracts. Instead of invoking from requests they invoke from instructions and rather than sending responses back they write their changes to the blockchain where anyone can read them. 

[Cryptography](https://youtu.be/amAq-WHAFs8?si=0PoY0wn3MIo5vqLE&t=387)


- Public key used as an address to transact with the person who's that public key is associated with
- Private key used to sign the transactions, to prove that the person who's that public key is associated with signed the transaction. 


- so basically notion of wallet in blockchain -> a wallet is just a private key with some solana in it. 

- In solana, smart contacts can store additional data in PDA's (Program Derived Address), PDA address not made form public key instead they made from seeds, and seeds are basically a random string of characters that are used to generate the PDA address.\
So solana PDA's are a type of key value store. 


Anchor -> Rust Framework to make solana programs

- [A simple programs/contracts using Rust Anchor framework](https://youtu.be/amAq-WHAFs8?si=_nYJJRURpuvC7ham&t=717) 
    - `ANCHOR_DISCRIMINIATOR_SIZE` is a something that written to the every account on blockchain by anchor to identify the account type. 

---

[Accounts-> Are like files on solana network ledger, many types of accounts exist for various purposes but 1 purpose to store SOL ( solana native currency )](https://youtu.be/HavGDGUTmgs?si=EHKk5wgYy1spmGoJ&t=207)

- lamports -> fractional SOL 

- Secret key maps to public key, anyone can read account data with public key but private key is used to perform actions on those accounts 

- JSON RPC(Remote procedure call) API-> all interactions with the solana network happens thorugh JSON RPC API

- @solana/web3.js -> abstraction on top of JSON RPC API, allow to call solana methods as js functions. For example, to query the SOL balanace of any account

- [Hashing and encryption ( 2 types ) explain clearly](https://youtu.be/i1L8oHZO7i4?si=YBMDeK0qYbUFSj1h&t=4285)
    - [Commonly we use asymmetric encryption in blockchain -> common algos](https://youtu.be/i1L8oHZO7i4?si=0nyeRc0PyFpq2N_l&t=4901)