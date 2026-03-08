**KDE Wallet (KWallet)** is the **password and secret storage system** used by **KDE Plasma**. It safely stores sensitive information so apps don’t need to ask you for passwords every time.

Think of it like a **secure vault for passwords and keys** on your Linux system.

---

# What KDE Wallet Stores

KWallet can store things like:

* 🌐 **Wi-Fi passwords**
* 🌍 **Browser website logins**
* 🔑 **SSH keys or tokens**
* 💬 **Chat / email credentials**
* 🔐 **Application API keys**
* ☁️ Cloud service credentials

Apps such as:

* **Konsole**
* **KMail**
* **NetworkManager**
* **Brave Browser**
* **Mozilla Firefox**

may use it to store secrets.

---

# How KDE Wallet Works

### 1️⃣ Login

When you log into **KDE Plasma**, the wallet may unlock using your **user password**.

---

### 2️⃣ App requests secret

An app (for example Wi-Fi connection via **NetworkManager**) needs a password.

Instead of saving it in plain text, it asks **KWallet**.

---

### 3️⃣ Secure storage

The password is stored **encrypted inside the wallet file**.

Example location:

```
~/.local/share/kwalletd/
```

---

### 4️⃣ App retrieves password

Next time the app needs the password:

```
App → KDE Wallet → return decrypted password
```

You don’t need to type it again.

---

# Encryption

KWallet encrypts data using either:

* **Blowfish**
* **GPG encryption**

Most modern setups use **Blowfish** with your login password.

---

# Wallet Types

Usually there is one default wallet:

```
kdewallet
```

But you can create multiple wallets, for example:

```
personal
work
development
```

Each can have its own password.

---

# Why KDE Wallet Pops Up

Sometimes you see a popup asking for the wallet password.

That happens when:

* the wallet is **locked**
* an app needs to **read stored credentials**

Once unlocked, apps can access stored secrets.

---

# KDE Wallet vs GNOME Keyring

| Feature             | KDE Wallet     | GNOME Keyring |
| ------------------- | -------------- | ------------- |
| Desktop             | **KDE Plasma** | **GNOME**     |
| Password storage    | Yes            | Yes           |
| SSH key storage     | Yes            | Yes           |
| Browser integration | Yes            | Yes           |

They serve the **same purpose** but for different desktops.

---

# Is It Safe?

Yes, because:

* passwords are **encrypted**
* apps cannot access them unless the wallet is **unlocked**
* the wallet file itself is unreadable without the key

---

# Pro Tip (Many Linux users do this)

You can configure **KWallet to unlock automatically at login**, so you never see the password popup again
.
