- [BTC white paper demestify](https://youtu.be/NoqNhWnjE1Q?si=5Z6tv8S7pAjAAUdz=7)

---

- TimeStamp Server: In blockchain, each block contains a timestamp(this includes the date, time, and timezone) and a link to the previous block, forming a chain. This ensures that the data in the
  blocks cannot be altered without changing all subsequent blocks, providing security and integrity to the blockchain.
  \
  **Timestamp server** is a way to prove that a piece of data existed at a certain point in time. It works by taking a hash of the data and publishing it in a public place, such as a newspaper or a website. This creates a permanent record that can be used to verify the existence of the data at that time.

- **Proof of Work**: Proof of Work (PoW) is a consensus mechanism used in blockchain networks to validate transactions and create new blocks. It requires participants (miners) to solve complex mathematical puzzles, which requires significant computational power and energy. The first miner to solve the puzzle gets to add the new block to the blockchain and is rewarded with cryptocurrency. This process ensures the security and integrity of the blockchain by making it difficult and costly to alter past transactions.

- [Network section in paper](https://youtu.be/NoqNhWnjE1Q?si=c1cQ9x-DZN5FzcgN&t=77)

- [Incentivize section](https://youtu.be/NoqNhWnjE1Q?si=BQ9Hb9rioqEA4WXm&t=97)

- [Reclaiming disk space section](https://youtu.be/NoqNhWnjE1Q?si=mOfWRjsoABpmPS38&t=107)
- [Simpilified payment verification section](https://youtu.be/NoqNhWnjE1Q?si=mOfWRjsoABpmPS38&t=107), basically allows you to run very lightweight node without much memory

- [Combining and splitting value section](https://youtu.be/NoqNhWnjE1Q?si=5uAt6xaux5wwTFzd&t=147), in this section it explains how transactions can have multiple inputs and outputs, allowing for more complex transactions and better privacy.

- [Calculations section](https://youtu.be/NoqNhWnjE1Q?si=CYoDhw_6snzoT3AE&t=187), this section explains the mathematical calculations behind the proof of work and how it ensures the security and integrity of the blockchain.

---

- [Hash functions and Digital signatures](https://youtu.be/NoqNhWnjE1Q?si=LMyCf-7l2SIyHo9Q&t=247), a **hash function** is a mathematical algorithm that takes an input (or 'message') and returns a fixed-size string of bytes. The output, typically a 'digest', is unique to each unique input. Even a small change in the input will produce a significantly different output. Hash functions are commonly used in computer science for data integrity verification, password storage, and digital signatures(digital signatures are used to verify that a message was sent by the person who claims to have sent it). BTC used **sha256** as its hash function.

- Public and Private keys: In blockchian, public and private keys are used to encrypt and decrypt data. Public keys are used to verify signatures and encrypt data, while private keys are used to sign transactions and decrypt data.

---

- [1.The Abstract](https://youtu.be/NoqNhWnjE1Q?si=SgeHEK1HhZI-yyTF&t=437)
  - **Double spending problem**: The double spending problem is a potential issue
    in digital currency systems where a user could spend the same digital token more
    than once. This is because digital information can be easily copied and duplicated, unlike physical currency. To prevent double spending, digital currency
    systems use various techniques such as cryptographic signatures, timestamps, and consensus mechanisms to ensure that each transaction is unique and cannot be
    duplicated.

- [2. Introduction](https://youtu.be/NoqNhWnjE1Q?si=5Z6tv8S7pAjAAUdz&t=497)
  - Traditional financial systems rely on trusted third parties (like banks) to process and verify transactions. This introduces a single point of failure and can lead to issues like fraud, censorship, and high fees.
  - Bitcoin aims to solve this problem by creating a decentralized digital currency that allows for peer-to-peer (**peer is a computer that is connected to the internet**) transactions without the need for intermediaries. This is achieved through the use of cryptographic techniques and a distributed ledger called the blockchain.
  - The introduction also highlights the importance of solving the double-spending problem, which is a key challenge in creating a digital currency. Bitcoin addresses this issue through the use of a consensus mechanism called Proof of Work, which ensures that transactions are verified and recorded in a secure and tamper-proof manner.

- [Transactions and an **electronic coin**](https://youtu.be/NoqNhWnjE1Q?si=KaA5Q6_CJYhsBHWD&t=637) 
    - Payer: The person or entity making the payment.
    - Payee: The person or entity receiving the payment.
    - Amount: The value of the payment being made.
    - Digital Signature: A cryptographic signature that verifies the authenticity of the transaction and ensures that it has not been altered.
    - Public Key: A unique identifier for the payer that is used to verify the digital signature.
    - Previous Transaction: A reference(hash of it) to the previous transaction(previous transaction of the payer) that the payer is using to fund the current transaction.
    - Input: The source of the funds being used in the transaction.
    - Output: The destination of the funds being sent in the transaction.
    - Transaction ID: A unique identifier for the transaction that is used to track it on the blockchain. Basically a hash of the transaction data.
    - Timestamp: The date and time that the transaction was created.
    - Fee: A small amount of cryptocurrency that is paid to the network to process the transaction.
    - Note: An optional field that can be used to include additional information about the transaction.

    - [demystification of transaction](https://youtu.be/NoqNhWnjE1Q?si=RWjUlFB6GLn0vYIM&t=657)


- The whole point of BTC network to come up with a agreed upon chronological order of transactions (in decentralized way) so that double spending problem is solved. Solution of this problem begins with **[TimeStamp Server](https://youtu.be/NoqNhWnjE1Q?si=KcSH3PuLmAMMrfLI&t=807)**

- [How we choose the chain (the right one)](https://youtu.be/NoqNhWnjE1Q?si=L0U5X0y7JDg00yQE&t=917), as when we make the timestamp server decentralized, multiple nodes will be creating blocks at the same time, leading to multiple versions of the blockchain. To resolve this, we need a way to choose the correct version of the blockchain. The solution is to choose the longest chain, which is the chain with the most cumulative **proof of work**. This means that the chain that has required the most computational power to create is considered the valid one. This approach ensures that the network remains secure and resistant to attacks, as an attacker would need to control more than 50% of the network's computational power than combining all the nodes to create a longer chain and manipulate the transaction history.