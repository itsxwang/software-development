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
