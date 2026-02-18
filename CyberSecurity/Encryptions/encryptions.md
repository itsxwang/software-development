### 1. AES (Advanced Encryption Standard)

**The "Unbreakable" Vault**

**Concept:** AES is a **Symmetric** encryption algorithm.

- **Symmetric** means the **same key** is used to lock (encrypt) and unlock (decrypt) the data.
- **Analogy:** You put a document in a titanium safe and set the combination to `55-12-99`. You send the safe to your friend. To open it, they _must_ know `55-12-99`. If you shout the combination across the room (internet), anyone can open it.

**How It Works (The Mechanics):**
AES doesn't just "scramble" text; it destroys the structure of the data using multiple rounds of mathematical chaos. It works on **Blocks** (chunks of 128 bits of data).

1. **Key Expansion:** Your password (e.g., "password123") is stretched into a massive mathematical schedule of keys, one for each round.
2. **The Rounds:** Depending on the key size, it performs 10, 12, or 14 rounds of processing:

- **SubBytes:** Replaces every byte with a different byte using a lookup table (S-Box). This breaks the linearity (so no longer equals ).
- **ShiftRows:** Shuffles the rows of data.
- **MixColumns:** Mixes the columns mathematically so a tiny change in one byte affects the entire block (Avalanche Effect).
- **AddRoundKey:** XORs the data with the secret key.

**Versions & Security:**

- **AES-128:** 10 rounds. Fastest. Uncrackable by brute force (would take billions of years).
- **AES-256:** 14 rounds. "Military Grade." Used for Top Secret data. Harder to break by quantum computers.

**Hacker's Perspective (Legal Hacking):**

- **You don't break the math.** No one cracks AES-256 directly.
- **You break the Implementation:**
- **Side-Channel Attacks:** Listening to the power consumption or electromagnetic noise of the CPU while it decrypts. You can reconstruct the key from the noise.
- **Bad Modes (ECB):** If a developer uses **AES-ECB** (Electronic Codebook), identical patterns in the input create identical patterns in the output. You can literally "see" the image through the encryption. _Always look for ECB mode in audits._

---

### 2. RSA (Rivest–Shamir–Adleman)

**The Key Exchange Mechanism**

**Concept:** RSA is **Asymmetric** encryption.

- **Asymmetric** means there are **two keys**:

1. **Public Key:** Given to everyone. Used to **Encrypt**.
2. **Private Key:** Kept secret. Used to **Decrypt**.

- **Analogy:** The Mailbox. Anyone can walk up to your house and drop a letter in your mailbox (Public Key). But only _you_ have the physical key to open the box and read the letters (Private Key).

**The Math (Simplified):**
RSA relies on the fact that it is **easy to multiply** two giant prime numbers, but **impossible to factor** them back.

1. Choose two massive primes, and .
2. Multiply them: $n = pq$.
3. The Public Key contains n. The Private Key contains the secret factors and p and q.
4. **Encryption:** $c = m^e \mod n$.
5. **Decryption:** $m = c^d \mod n$.

**Usage:**
RSA is slow. We don't use it to encrypt Netflix streams. We use it **only** to share the AES key.

1. Browser: "Here is my RSA Public Key."
2. Server: Generates an AES key, encrypts it with the Public Key, and sends it back.
3. Browser: Decrypts it with the Private Key. Now both sides have the AES key and switch to AES (speed).

**Hacker's Perspective:**

- **Key Size Matters:** RSA-1024 is dead (cracked). RSA-2048 is the minimum standard. If you see a site using 1024-bit keys, it's a critical vulnerability.
- **Padding Oracle Attack:** If the server tells you "Decryption failed" too quickly or with a specific error, you can bombard it with slightly modified codes to guess the private key byte-by-byte.

---

### 3. SSL / TLS (Secure Sockets Layer / Transport Layer Security)

**The Armored Truck**

**Concept:** TLS is not an algorithm; it's a **Protocol**. It effectively packages AES and RSA (or Elliptic Curve) together to create a secure tunnel.

- **SSL:** Old, dead, insecure. (SSL 3.0 died with the POODLE attack).
- **TLS:** The modern standard. (TLS 1.2 is standard; TLS 1.3 is the latest).

**The Handshake (How the connection starts):**
Every time you visit `https://google.com`, this happens in milliseconds:

1. **Client Hello:** "I speak TLS 1.2 and 1.3. I support these ciphers."
2. **Server Hello:** "Let's use TLS 1.3. Here is my Certificate (ID Card)."
3. **Authentication:** Browser checks the Certificate with a trusted Authority (like Verisign) to ensure it's actually Google.
4. **Key Exchange:** They use RSA (or Diffie-Hellman) to agree on a **Session Key** (AES Key).
5. **Finished:** "Everything after this is encrypted with AES."

**Hacker's Perspective:**

- **Downgrade Attacks:** You (Man-in-the-Middle) intercept the "Client Hello" and change it to "I only speak SSL 3.0." The server, trying to be helpful, downgrades to the weak protocol, which you can then crack.
- **Certificate Fraud:** If you can trick a Certificate Authority into issuing a cert for `google.com` to _you_, you can intercept all traffic without the user knowing.

---

### 4. WPA / WPA2 / WPA3 (Wi-Fi Security)

**The Airwaves Defense**

These protocols protect the data flying through the air between your laptop and the Wi-Fi Router (Access Point).

#### A. WPA (Wi-Fi Protected Access) - _Deprecated_

- **Algorithm:** Uses **TKIP** (Temporal Key Integrity Protocol).
- **Flaw:** It was a band-aid for the ancient WEP protocol. It rotates keys, but the integrity check (MIC) is weak. It is easily cracked today.

#### B. WPA2 (The Standard)

- **Algorithm:** Uses **AES-CCMP**. It is very strong encryption-wise.
- **The Vulnerability (The 4-Way Handshake):**
  You don't attack the encryption; you attack the **Handshake**.

1. **Router:** Sends a random number (ANonce).
2. **You (Client):** Send a random number (SNonce) + a **MIC** (Message Integrity Code).

- **The Hack:** The MIC is a mathematical "signature" derived from the Wi-Fi Password. If a hacker captures this "Handshake" (by kicking you off the network for a split second), they can take that MIC home and run a dictionary attack against it offline until they find the password.

#### C. WPA3 (The New Standard)

- **Algorithm:** Uses **GCMP-256** (Stronger AES).
- **The Fix:** Replaces the 4-Way Handshake with **SAE (Simultaneous Authentication of Equals)**.
- **Dragonfly Key Exchange:** It uses a "Zero-Knowledge Proof." You prove you know the password without actually sending the password or a hash of the password across the air.
- **Result:** It kills the "Offline Dictionary Attack." A hacker gets one guess per interaction. They cannot capture a handshake and crack it on a gaming PC at home.

**Hacker's Perspective:**

- **WPA2:** Capture the handshake -> `aircrack-ng` -> Brute force offline.
- **WPA3:** Much harder. You usually look for **Transition Mode** (where the router supports both WPA2 and WPA3) and force the victim to downgrade to WPA2.

### Summary Table for Quick Reference

| Tech     | Role                        | The "Math"                      | The "Hack" (Legal/Audit)                        |
| -------- | --------------------------- | ------------------------------- | ----------------------------------------------- |
| **AES**  | Locks the data (Symmetric)  | Substitution/Permutation Rounds | Side-channel attacks or weak modes (ECB).       |
| **RSA**  | Shares the key (Asymmetric) | Prime Factorization ()          | Padding Oracle, weak keys (<2048 bit).          |
| **TLS**  | The Tunnel (Protocol)       | Handshake (Cert + Key Exchange) | Downgrade attacks, expired certs.               |
| **WPA2** | Wi-Fi Password              | 4-Way Handshake (AES-CCMP)      | Capture Handshake -> Offline Dictionary Attack. |
| **WPA3** | Strong Wi-Fi                | SAE (Dragonfly)                 | Downgrade to WPA2 (Transition Mode).            |
