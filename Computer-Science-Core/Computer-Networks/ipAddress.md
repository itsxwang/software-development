### What is an IP Address?
An **IP address** (Internet Protocol address) is a unique numerical identifier assigned to every device (like computers, smartphones, servers, or even IoT devices like smart TVs) connected to a network that uses the **Internet Protocol (IP)** for communication. The Internet Protocol is a set of rules that governs how data is sent and received over networks, including the internet. Think of an IP address as a postal address for your device—it tells other devices where to send data and identifies your device on the network.

The IP address serves two primary functions:
1. **Host Identification**: It uniquely identifies a device on a network, like a name tag.
2. **Location Addressing**: It specifies the device’s location in the network, enabling data to be routed to it.

---

### Types of IP Addresses: IPv4 and IPv6
There are two versions of IP addresses in use today: **IPv4** and **IPv6**. Let’s break them down in detail.

#### 1. IPv4 (Internet Protocol version 4)
- **Definition**: IPv4 is the older and still widely used version of the IP addressing system, introduced in the early 1980s. It uses a **32-bit address** format.
- **Format**: An IPv4 address is written as four numbers (each ranging from 0 to 255) separated by dots (periods). For example: `192.168.1.1`.
  - Each number is called an **octet** because it represents 8 bits (a byte) in binary. For instance, `192` in binary is `11000000`.
  - The total length of an IPv4 address is 32 bits (4 octets × 8 bits = 32 bits).
- **Address Space**: IPv4 supports approximately **4.3 billion unique addresses** (2³² = 4,294,967,296). This might sound like a lot, but with the explosion of internet-connected devices (billions of smartphones, computers, IoT devices, etc.), this pool is nearly exhausted.
         - We us 2³² possibilites logic because: 
               1 bit → 2 possibilities
               2 bits → 2 × 2 = 4 possibilities
               3 bits → 2 × 2 × 2 = 8 possibilities 
               ..., 32 bits = 2³² 


- Note: Devices can be both on private and public network. And dependending of where they are determine what type of IP addresses they have: Private or Public  

- A public address is used to identify the device on the Internet, whereas a private address is used to identify a device amongst other devices

- Public address provide by ISPs, and any data sent to internet from these devices who use speicfic public IP, idenetified by that Public IP.  


- **Example Breakdown**:
  - Take `192.168.1.1`:
    - `192` = `11000000` in binary.
    - `168` = `10101000` in binary.
    - `1` = `00000001` in binary.
    - `1` = `00000001` in binary.
    - Combined: `11000000.10101000.00000001.00000001` (32 bits).
- **Limitations**: The limited address space of IPv4 has led to shortages, prompting techniques like **NAT (Network Address Translation)** (explained later) and the development of IPv6.

#### 2. IPv6 (Internet Protocol version 6)
- **Definition**: IPv6 is the newer version, designed to replace IPv4 and solve its address shortage. It uses a **128-bit address** format.
- **Format**: An IPv6 address is written as eight groups of four **hexadecimal digits** (each group represents 16 bits), separated by colons. For example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.
  - **Hexadecimal**: Each digit in IPv6 can be 0–9 or a–f (representing 0–15 in decimal). For example, `2001` in hexadecimal is a single group of 16 bits.
  - To simplify, leading zeros in a group can be omitted, and consecutive groups of all zeros can be replaced with `::` (but only once per address). For example, `2001:0db8:0000:0000:0000:0000:0370:7334` can be shortened to `2001:0db8::0370:7334`.
- **Address Space**: IPv6 supports **340 undecillion addresses** (2¹²⁸ = 340,282,366,920,938,463,463,374,607,431,768,211,456). This is enough to assign unique addresses to every device on Earth (and beyond) for the foreseeable future.
- **Advantages**:
  - Virtually unlimited addresses.
  - Simplified packet headers for faster routing.
  - Built-in support for security (e.g., **IPsec**, a protocol for secure communication).
  - No need for NAT in most cases, as every device can have a unique public IP.
- **Challenges**: IPv6 adoption is slower due to compatibility issues with IPv4-based infrastructure, requiring transition mechanisms like **dual-stack** (running both IPv4 and IPv6) or **tunneling** (encapsulating IPv6 packets in IPv4 networks).

---

### Structure of an IP Address
An IP address is divided into two logical parts: the **network portion** and the **host portion**. This division helps routers determine where to send data packets.

#### 1. IPv4 Structure
- **Network Portion**: Identifies the specific network a device is connected to (e.g., your home Wi-Fi network or an ISP’s network).
- **Host Portion**: Identifies the specific device within that network.
- **Subnet Mask**: A subnet mask is a 32-bit number that determines which part of the IP address is the network portion and which is the host portion. It’s written in the same format as an IPv4 address (e.g., `255.255.255.0`) or in **CIDR notation** (e.g., `/24`).
  - **How It Works**:
    - A subnet mask consists of a series of `1`s (for the network portion) followed by `0`s (for the host portion) in binary.
    - For example, `255.255.255.0` in binary is `11111111.11111111.11111111.00000000`.
    - The `1`s mark the network bits, and the `0`s mark the host bits.
    - If an IP address is `192.168.1.10` with a subnet mask of `255.255.255.0`:
      - Network portion: `192.168.1` (first 24 bits).
      - Host portion: `10` (last 8 bits).
  - **CIDR Notation**: Stands for **Classless Inter-Domain Routing**. Instead of writing the subnet mask, you indicate the number of network bits with a slash. For example, `192.168.1.10/24` means the first 24 bits are the network portion, equivalent to a subnet mask of `255.255.255.0`.
  - **Subnetting**: Dividing a network into smaller subnetworks (subnets) to improve organization and security. For example:
    - Network: `192.168.1.0/24` (supports 256 addresses: 1 network, 1 broadcast, 254 hosts).
    - Subnet it into two smaller networks: `192.168.1.0/25` and `192.168.1.128/25` (each with 128 addresses).
    - Subnet masks allow precise control over how many devices can be in a subnet.

#### 2. IPv6 Structure
- **Network Portion**: Called the **network prefix**, typically the first 64 bits, assigned by an ISP or network administrator.
- **Interface Identifier**: The remaining 64 bits, identifying the specific device on the network.
- **Subnetting in IPv6**: Similar to IPv4, but the larger address space allows for more flexible subnetting. For example, a `/64` prefix means the first 64 bits are the network prefix, leaving 64 bits for hosts (enough for 2⁶⁴ devices per subnet).
- **Stateless Address Autoconfiguration (SLAAC)**:
  - **Definition**: A mechanism in IPv6 that allows devices to automatically configure their own IP addresses without a DHCP server.
  - **How It Works**:
    1. A device generates a **link-local address** (starts with `fe80::/10`) using its **MAC address** (a 48-bit hardware address unique to the device’s network interface) or a random identifier.
    2. The device sends a **Router Solicitation (RS)** message to discover routers on the network.
    3. The router responds with a **Router Advertisement (RA)** message, providing the network prefix (e.g., `2001:0db8:85a3::/64`).
    4. The device combines the network prefix with its interface identifier to create a globally unique IPv6 address (e.g., `2001:0db8:85a3:0000:1234:5678:9abc:def0`).
    5. The device performs **Duplicate Address Detection (DAD)** by sending a **Neighbor Solicitation** message to ensure no other device on the network is using the same address.
  - **Benefits**:
    - Simplifies IP address assignment in large networks.
    - Reduces reliance on DHCP servers.
    - Enables devices to connect to networks quickly.
  - **Privacy Considerations**: Since SLAAC often uses the MAC address, it can be tracked across networks. To counter this, devices can use **temporary addresses** (randomized interface identifiers that change periodically).

---

### Types of IP Address Allocation
Devices can be assigned IP addresses in different ways, depending on the network’s needs.

1. **Static IP Address**:
   - **Definition**: A fixed IP address manually assigned to a device by a network administrator.
   - **Use Cases**: Servers (e.g., web servers, email servers), printers, or devices needing consistent addressing.
   - **Example**: A web server might be assigned `192.168.1.100` permanently.
   - **Pros**: Reliable for services requiring a consistent address.
   - **Cons**: Manual configuration is time-consuming and prone to errors (e.g., assigning the same IP twice).

2. **Dynamic IP Address**:
   - **Definition**: An IP address automatically assigned by a **DHCP server** (Dynamic Host Configuration Protocol).
   - **How DHCP Works**:
     1. A device connects to the network and sends a **DHCP Discover** message (a broadcast asking for an IP).
     2. The DHCP server responds with a **DHCP Offer**, proposing an available IP address and configuration details (e.g., subnet mask, default gateway, DNS servers).
     3. The device sends a **DHCP Request** to accept the offer.
     4. The server confirms with a **DHCP ACK**, assigning the IP for a specific **lease duration** (e.g., 24 hours).
     5. When the lease expires, the device must renew it or get a new IP.
   - **Use Cases**: Home networks, offices, or any environment with many devices.
   - **Example**: Your laptop might get `192.168.1.50` today and `192.168.1.51` tomorrow.
   - **Pros**: Simplifies IP management, reduces conflicts.
   - **Cons**: IP changes can disrupt services needing a fixed address.

3. **Private IP Address**:
   - **Definition**: IP addresses reserved for use within private networks, not routable on the public internet.
   - **IPv4 Private Ranges**:
     - `10.0.0.0` to `10.255.255.255` (`10.0.0.0/8`, 16.7 million addresses).
     - `172.16.0.0` to `172.31.255.255` (`172.16.0.0/12`, 1 million addresses).
     - `192.168.0.0` to `192.168.255.255` (`192.168.0.0/16`, 65,536 addresses).
   - **IPv6 Private Range**: **Unique Local Addresses (ULA)**, starting with `fc00::/7` (but only `fd00::/8` is used with a randomly generated 40-bit identifier).
   - **Use Case**: Home or office networks where devices communicate internally.
   - **How They Work with NAT**:
     - Private IPs can’t communicate directly with the public internet.
     - **Network Address Translation (NAT)** allows multiple devices with private IPs to share a single public IP:
       - A router translates private IPs (e.g., `192.168.1.10`) to its public IP (e.g., `203.0.113.1`) when sending data to the internet.
       - It keeps a **NAT table** to track which private IP corresponds to which internet request.
       - When data returns, the router uses the NAT table to send it back to the correct private IP.
     - **Port Address Translation (PAT)**: A type of NAT where the router also maps ports (e.g., `192.168.1.10:5000` to `203.0.113.1:6000`) to handle multiple devices.

4. **Public IP Address**:
   - **Definition**: An IP address routable on the public internet, assigned by an **Internet Service Provider (ISP)** or a **Regional Internet Registry (RIR)** like ARIN or RIPE.
   - **Example**: `203.0.113.1` (IPv4) or `2001:db8::1` (IPv6).
   - **Use Case**: Servers or devices that need to be accessible from the internet (e.g., a website hosted at `172.217.167.78` for Google).
   - **Assignment**: Public IPs are leased by ISPs to customers or allocated to organizations via RIRs.

---

### Special IP Addresses
Certain IP addresses have specific roles in networking:

1. **Loopback Address**:
   - **IPv4**: `127.0.0.1` (part of the `127.0.0.0/8` range).
   - **IPv6**: `::1` (written as `0:0:0:0:0:0:0:1`).
   - **Purpose**: Refers to the local device itself. Used for testing network software without sending data over a network.
   - **Example**: Typing `ping 127.0.0.1` tests if your device’s network stack is functioning.

2. **Default Gateway**:
   - **Definition**: The IP address of the router that connects a local network to external networks (like the internet).
   - **Example**: In a home network, the default gateway is often `192.168.1.1` or `192.168.0.1`.
   - **Role**: Devices send data to the default gateway when the destination IP is outside the local network.

3. **Broadcast Address (IPv4 only)**:
   - **Definition**: `255.255.255.255` sends data to all devices in the local network.
   - **Example**: Used by DHCP Discover messages to reach any DHCP server on the network.
   - **IPv6 Note**: IPv6 doesn’t use broadcast; it uses **multicast** (sending data to a specific group of devices).

4. **Multicast Addresses**:
   - **IPv4**: Range `224.0.0.0` to `239.255.255.255`.
   - **IPv6**: Start with `ff00::/8`.
   - **Purpose**: Used to send data to multiple devices simultaneously (e.g., streaming video to multiple subscribers).

5. **Anycast Addresses (IPv6, also used in IPv4)**:
   - **Definition**: A single IP address assigned to multiple devices, with data routed to the nearest one (based on routing metrics).
   - **Example**: DNS servers often use anycast to distribute queries efficiently.

---

### How IP Addresses Work in Communication
IP addresses are critical for **packet-based communication**, where data is broken into small chunks called **packets**. Here’s the process in detail:
1. **Data Packet Creation**:
   - When you send data (e.g., loading a website), your device creates packets with a **header** and **payload**.
   - The header includes:
     - **Source IP**: Your device’s IP address (e.g., `192.168.1.10`).
     - **Destination IP**: The recipient’s IP address (e.g., `172.217.167.78` for a Google server).
     - Other fields like **protocol** (e.g., TCP or UDP), **port numbers**, and **TTL (Time to Live)** to prevent packets from looping indefinitely.
   - The payload contains the actual data (e.g., a webpage request).
2. **Routing**:
   - Your device checks if the destination IP is in the same network (using the subnet mask).
   - If it’s local, the packet is sent directly to the destination.
   - If it’s external, the packet is sent to the **default gateway** (router).
   - Routers use **routing tables** (lists of network destinations and paths) to forward packets toward the destination IP, hop by hop, across networks.
3. **Delivery**:
   - The destination device receives the packet, checks the IP address, and processes the data.
   - If a response is needed (e.g., sending a webpage back), the process repeats in reverse.

---

### Challenges and Security
1. **IPv4 Address Exhaustion**:
   - The 4.3 billion IPv4 addresses are insufficient for the number of devices today.
   - **Solutions**:
     - **NAT**: Allows multiple devices to share one public IP, as described earlier.
     - **IPv6 Adoption**: Slowly replacing IPv4 but requires infrastructure upgrades.
2. **IP Spoofing**:
   - Attackers can forge the source IP address in packets to impersonate another device.
   - **Mitigation**: Use **IPsec** (a protocol suite for encrypting and authenticating IP packets) or firewalls to filter suspicious traffic.
3. **Dynamic IP Challenges**:
   - Changing IPs can disrupt services like remote access.
   - **Solution**: Use **Dynamic DNS (DDNS)**, which maps a domain name (e.g., `myhome.ddns.net`) to a changing IP address.
4. **Privacy in IPv6**:
   - SLAAC can expose a device’s MAC address, enabling tracking.
   - **Solution**: Use **privacy extensions** to generate random, temporary interface identifiers.

---

### Tools for Working with IP Addresses
1. **Ping**: Tests connectivity to an IP address by sending **ICMP (Internet Control Message Protocol)** echo request packets and waiting for a response. Example: `ping 8.8.8.8` (Google’s DNS server).
2. **Traceroute (tracert on Windows)**: Shows the path packets take to a destination IP, listing each router hop.
3. **ipconfig (Windows) / ifconfig or ip addr (Linux)**: Displays your device’s IP configuration, including IP address, subnet mask, and default gateway.
4. **nslookup or dig**: Resolves domain names to IP addresses (e.g., `nslookup google.com` returns `172.217.167.78`).
5. **ARP (Address Resolution Protocol)**: Maps an IP address to a MAC address within a local network.

---

### Summary
An IP address is a cornerstone of computer networking, enabling devices to communicate by identifying and locating them. **IPv4** uses 32-bit addresses (e.g., `192.168.1.1`), limited by its 4.3 billion address cap, while **IPv6** uses 128-bit addresses (e.g., `2001:0db8::7334`) for a virtually unlimited pool. **Subnet masks** (e.g., `255.255.255.0`) divide IP addresses into network and host portions, with **CIDR** simplifying notation. **SLAAC** in IPv6 automates address assignment using router advertisements and interface identifiers. IP addresses can be **static** or **dynamic** (via DHCP), **private** or **public**, with special addresses like **loopback** (`127.0.0.1`) and **broadcast** (`255.255.255.255`). **NAT** and **IPsec** address IPv4 limitations and security, respectively.



---
- This will show the router ip address

```
ip route show | grep -i 'default via' | awk '{print $3}'
```

