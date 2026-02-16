The **Address Resolution Protocol (ARP)** is a fundamental "low-level" networking protocol used to map a dynamic **IP address** (Layer 3) to a physical **MAC address** (Layer 2) on a local network.

Think of it as the "phonebook" of a local area network (LAN). While your computer knows the IP address of the device it wants to talk to, it cannot actually send data across the physical wire or Wi-Fi without knowing the specific hardware ID (MAC address) of the destination.

---

## How ARP Works (The Step-by-Step)

When a device (Host A) wants to communicate with another device (Host B) on the same network, the following process occurs:

1. **The Check:** Host A checks its **ARP Cache** (a temporary table in memory) to see if it already knows the MAC address for Host B's IP.
2. **The Request:** If the address isn't there, Host A sends an **ARP Request**. This is a broadcast packet sent to every device on the LAN, essentially asking: _"Who has IP address 192.168.1.5? Tell 192.168.1.2."_
3. **The Reply:** All devices receive the request, but only Host B (which owns that IP) responds with an **ARP Reply**. This message says: _"That's me! My MAC address is 00:AA:BB:CC:DD:EE."_
4. **The Update:** Host A receives the reply, saves the mapping in its ARP Cache, and can now begin sending the actual data.

---

## Types of ARP

While the standard request/reply is most common, there are specialized versions:

- **Proxy ARP:** A technique where a layer 3 device (like a router) answers ARP requests for a network that isn't its own, "lying" to the sender to help route traffic.
- **Gratuitous ARP:** A device sends an ARP response that wasn't requested. This is used to announce a new IP/MAC pair to the network or detect IP conflicts.
- **Reverse ARP (RARP):** An obsolete version where a device knows its MAC but needs to find its IP (now handled by DHCP).

---

## Security Risks: ARP Spoofing

ARP was designed in a simpler era of networking and lacks built-in authentication. This leads to a vulnerability called **ARP Spoofing** (or ARP Poisoning).

In this attack, a malicious actor sends fake ARP messages onto a local network. They "claim" to be the default gateway (the router). The victim's computer updates its cache with the attacker's MAC address. Consequently, all traffic intended for the internet is sent to the attacker first, allowing for **Man-in-the-Middle (MITM)** attacks.

---

## Inspecting ARP on Your Machine

In **Ubuntu 22.04**, you can easily see your own ARP table right now. Open your terminal and run:

```bash
ip neighbor show
# OR the older command
arp -n

```

This will display the list of IP addresses and their corresponding MAC addresses currently stored in your system's memory.

- **Example table**

```
192.168.29.1 dev wlp0s20f3 lladdr 4c:22:f3:f3:75:70 REACHABLE

192.168.29.33 dev wlp0s20f3 FAILED

192.168.29.123 dev wlp0s20f3 lladdr c4:3a:35:f0:a3:d6 REACHABLE

2405:201:402f:40bc::c0a8:1d01 dev wlp0s20f3 lladdr 4c:22:f3:f3:75:70 router REACHABLE

fe80::4e22:f3ff:fef3:7570 dev wlp0s20f3 lladdr 4c:22:f3:f3:75:70 router REACHABLE
```

A list of all the other devices on your local network that your machine has recently "talked" to or identified.

Since you're seeing entries like 192.168.29.x, you are currently on a private subnet, likely managed by a home or office router.

### Breaking Down the Columns

| Column | Meaning |
| --- | --- |
| **IP Address** | The Layer 3 address of the other device (e.g., `192.168.29.1`). |
| **dev wlp0s20f3** | The name of **your** network interface. `wlp...` indicates you are connected via **Wi-Fi**. |
| **lladdr** | Short for "Link Layer Address." This is the physical **MAC Address** of that device. |
| **router** | (IPv6 only) Flags that this specific device is acting as the gateway for your internet traffic. |
| **REACHABLE / FAILED** | The current status of the connection (see below). |

---



### Understanding the Results

- **`192.168.29.1` (REACHABLE):** This is almost certainly your **Router/Gateway**. It has a MAC address ending in `75:70`. Because it's "REACHABLE," your computer has verified it’s still there within the last few seconds.
- **`192.168.29.33` (FAILED):** Your computer tried to find the MAC address for this IP (likely via an ARP request) but got no response. This happens if a device recently disconnected or if you tried to ping an IP that doesn't exist on your network.
- **`192.168.29.123` (REACHABLE):** Another active device on your Wi-Fi—possibly a phone, a smart TV, or another laptop.
- **The long `2405:...` and `fe80:...` addresses:** These are **IPv6** addresses for your router. Notice they share the exact same `lladdr` (MAC address) as the `192.168.29.1` entry. This confirms it’s the same physical hardware talking over two different protocols (IPv4 and IPv6).

