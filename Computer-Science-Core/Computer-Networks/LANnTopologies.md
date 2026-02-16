A **Local Area Network** (**LAN)** is a computer network that connects devices within a limited geographic area, such as a home, office, school, or building. It enables devices like computers, printers, smartphones, and servers to share resources—such as files, internet access, and peripherals—quickly and securely.

A LAN can function without internet access, allowing local communication and file sharing. It’s often the foundation of larger networks, connecting to WANs (Wide Area Networks) like the internet.

- Speed => 10 Gbps or more.

- Centralized management -> Devices are often connected through a router, switch, or wireless access point.

# Topology

(in networking context): Topology means the design or layout of a network, including how devices are connected and communicate with each other.

_(
Star Topology:)_
In a star topology, all devices are connected to a central hub or switch. This central device acts as a conduit to transmit messages. If one device fails, it does not affect the rest of the network, but if the central hub fails. \
More cabling is required compared to other topologies. More expense. \
More efficient for larger networks. Scalable as new devices can be added easily.

_(
Bus Topology:)_
In a bus topology, all devices are connected to a single central cable, known as the bus or backbone. Data sent from a device travels along the bus until it reaches its destination. \
If the main cable fails, the entire network goes down. \
Less cabling is required, making it more cost-effective for small networks. \

_(
Ring Topology:)_
In a ring topology, each device is connected to two other devices, forming a circular data path. Data travels in one direction around the ring until it reaches its destination. \
A failure in any single device or connection can disrupt the entire network. \
Data packets can travel at high speeds since they only move in one direction. \
More cabling is required compared to bus topology.

_(
Mesh Topology:)_
In a mesh topology, every device is directly connected to every other device on the network. This creates multiple redundant paths for data to travel. \
Highly reliable and robust, as the failure of a single link does not affect the rest of the network. \
Requires a significant amount of cabling and ports, making it expensive and complex to install and manage.

_(
Hybrid Topology:)_
A hybrid topology is a combination of two or more different basic topologies (like star, bus, ring, or mesh). For example, connecting several star-configured networks to a central bus backbone creates a star-bus hybrid. \
It combines the advantages of the different topologies it integrates, offering flexibility and scalability. \
The complexity and cost depend on the specific topologies being combined.

---

- What is `ROUTER`?
  A router is a networking device that forwards data packets between computer networks. It directs traffic on the internet by determining the best path for data to travel from the source to the destination. Routers connect different networks, such as a local area network (LAN) to a wide area network (WAN), and manage traffic within and between these networks. They use routing tables and protocols to make decisions about where to send data packets.

- What is `SWITCH`?
  A switch is a networking device that connects devices within a local area network (LAN) and uses MAC addresses to forward data to the correct destination. Unlike a hub, which broadcasts data to all connected devices, a switch intelligently directs data only to the device that needs it. This improves network efficiency and reduces collisions. Switches operate at the data link layer (Layer 2) of the OSI model and can also operate at the network layer (Layer 3) for routing capabilities.

- What is `HUB`?
  A hub is a basic networking device that connects multiple devices in a local area network (LAN). It operates at the physical layer (Layer 1) of the OSI model and simply broadcasts incoming data packets to all connected devices, regardless of the intended recipient. This can lead to network inefficiencies and collisions, as all devices share the same bandwidth. Hubs are largely obsolete today, having been replaced by more intelligent devices like switches.

---

- What is `MODEM`?
  A **Modem** (short for **Modulator-Demodulator**) is the device that connects your local network to the Internet Service Provider (ISP). Its primary job is to convert signals:
  1.  **Modulation**: It converts the digital data from your network into an analog signal suitable for transmission over the ISP's infrastructure (e.g., cable, DSL, or fiber lines).
  2.  **Demodulation**: It converts incoming analog signals from the ISP back into digital data that your devices can understand.
      Essentially, it's the gateway between your private network and the public internet. Many modern devices from ISPs are combination units that include a modem, router, switch, and WAP in one box.

- What is a `WAP` (Wireless Access Point)?
  A **Wireless Access Point (WAP)** is a device that allows wireless-capable devices (like laptops, smartphones, and tablets) to connect to a wired network. It acts as a bridge, converting data from the wired Ethernet network into a wireless signal (e.g., Wi-Fi) and vice versa.
  - **Key Function**: Its sole purpose is to provide wireless access to an existing network. It does not perform routing functions like a router does.
  - **Use Case**: While most home routers have a built-in WAP, standalone WAPs are used in larger spaces like offices, schools, or coffee shops to extend Wi-Fi coverage. Multiple WAPs can be installed to create a large, seamless wireless network.

---

- What is a `FIREWALL`?
  A **Firewall** is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and an untrusted external network, such as the Internet.
  - **Primary Goal**: To allow legitimate traffic to pass through while blocking malicious or unauthorized traffic.
  - **How it Works**: Firewalls analyze data packets and use a set of rules to determine whether to allow or block them. These rules can be based on IP addresses, port numbers, protocols, and even the content of the packets.

  ### Categories of Firewalls:
  1.  **Packet-Filtering Firewalls**: This is the most basic type. It inspects individual packets in isolation and checks them against a set of rules based on source/destination IP addresses and ports. It's fast but doesn't track the state of connections.
  2.  **Stateful Inspection Firewalls**: These firewalls monitor the state of active connections (e.g., TCP handshakes) and use this context to make more intelligent decisions. They only allow traffic that is part of an established, legitimate connection.
  3.  **Proxy Firewalls (Application-Level Gateway)**: Operating at the application layer, these firewalls act as an intermediary for traffic between two networks. They inspect the payload of packets, can understand application-specific commands (like HTTP or FTP), and offer more granular security, but can introduce latency.
  4.  **Next-Generation Firewalls (NGFW)**: These combine traditional firewall capabilities with more advanced features, such as deep packet inspection (DPI), intrusion prevention systems (IPS), application awareness and control, and threat intelligence feeds.

  Firewalls can be implemented as **software** (e.g., the one built into your operating system) or as a **hardware** appliance (a dedicated device, often integrated into a router).

---

**Subnetting**:
Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks, or subnets. This is done by borrowing bits from the host portion of an IP address(portion of an IP address is the part that identifies a specific device (host)) to create additional network addresses. Subnetting improves network performance and security by reducing broadcast traffic and isolating segments of the network.
