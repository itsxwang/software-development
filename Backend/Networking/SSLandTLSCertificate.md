# 🔐 SSL, TLS, and Certificates Explained

## 1. What is SSL?

**SSL (Secure Sockets Layer)** is a cryptographic protocol designed to provide **secure communication over the internet**. It encrypts the data transferred between a client (e.g., a browser) and a server (e.g., a website).

> ⚠️ SSL is outdated and has been replaced by TLS.

---

## 2. What is TLS?

**TLS (Transport Layer Security)** is the modern and more secure version of SSL.

- TLS 1.0 → Released in 1999
- TLS 1.2 and TLS 1.3 → Most commonly used today
- TLS ensures:
  - **Encryption**: Prevents eavesdropping(listening to communication of others secretely) 
  - **Integrity**: Prevents data tampering(to alter or change something secretly or improperly)
  - **Authentication**: Confirms the identity of the parties

> ✅ When people say "SSL", they usually mean "SSL/TLS".

---

## 3. What is an SSL/TLS Certificate?

An **SSL/TLS certificate** is a digital file issued by a **Certificate Authority (CA)** that:

- Verifies the **ownership** of a public key
- Confirms the **identity** of a website
- Enables **HTTPS** in browsers (green padlock 🔒)

### Example Info in a Certificate:

| Field              | Description                       |
|-------------------|-----------------------------------|
| Domain Name        | The website URL (e.g., `example.com`) |
| Organization       | Who owns the site                 |
| Public Key         | Used for encryption               |
| Issuer             | The CA that issued the cert       |
| Expiry Date        | When the cert expires             |

---

## 4. How SSL/TLS Works (Simplified)

1. **Client Hello**: Browser says "Hi" with supported TLS versions, ciphers.
2. **Server Hello**: Server replies with chosen version, cipher, and its certificate.
3. **Certificate Validation**: Browser checks the certificate with trusted CAs.
4. **Key Exchange**: A secure key is shared using asymmetric cryptography.
5. **Secure Connection**: Now both browser and server use that key for encrypted communication.

---

## 5. Types of SSL Certificates

| Type              | Description                                         |
|-------------------|-----------------------------------------------------|
| DV (Domain Validation) | Validates domain ownership only              |
| OV (Org Validation)    | Validates org identity + domain              |
| EV (Extended Validation) | Highest level, includes company name in browser |

---

## 6. Where Do You Get Certificates?

From **Certificate Authorities (CAs)**:

- Paid options: DigiCert, Sectigo, GlobalSign
- Free option: [Let's Encrypt](https://letsencrypt.org)

---

## 7. What is HTTPS?

**HTTPS = HTTP + SSL/TLS**

- Ensures secure communication between a browser and a web server
- Encrypts sensitive data like passwords, credit cards

---

## 8. Tools & Commands

### Check SSL cert in browser:
- Click padlock icon → View Certificate

### Check SSL cert via terminal:
```bash
openssl s_client -connect example.com:443
``` 

## 9. Best Practices
- Always use TLS 1.2 or 1.3
- Redirect all HTTP traffic to HTTPS
- Use strong ciphers
- Regularly renew your certificate
- Consider HSTS to enforce HTTPS

## 10. Bonus: How Does Encryption Work?

- **Asymmetric encryption**: Uses public/private key pair

    - **Public key**: encrypts data

    - **Private key**: decrypts it

- **Symmetric encryption**: Uses one shared key for both encrypt/decrypt (used after handshake for performance)

##  Summary
- SSL is outdated → use TLS.

- SSL/TLS Certificates enable HTTPS and verify identity of the website.

- Get certificates from a trusted CA.

- TLS protects privacy, data integrity, and authenticity online.