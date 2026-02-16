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

---

- What is `ROUTER`?
  A router is a networking device that forwards data packets between computer networks. It directs traffic on the internet by determining the best path for data to travel from the source to the destination. Routers connect different networks, such as a local area network (LAN) to a wide area network (WAN), and manage traffic within and between these networks. They use routing tables and protocols to make decisions about where to send data packets.

- What is `SWITCH`?
  A switch is a networking device that connects devices within a local area network (LAN) and uses MAC addresses to forward data to the correct destination. Unlike a hub, which broadcasts data to all connected devices, a switch intelligently directs data only to the device that needs it. This improves network efficiency and reduces collisions. Switches operate at the data link layer (Layer 2) of the OSI model and can alsooperate at the network layer (Layer 3) for routing capabilities.

- What is `HUB`?
  A hub is a basic networking device that connects multiple devices in a local area network (LAN). It operates at the physical layer (Layer 1) of the OSI model and simply broadcasts incoming data packets to all connected devices, regardless of the intended recipient. This can lead to network inefficiencies and collisions, as all devices share the same bandwidth. Hubs are largely obsolete today, having been replaced by more intelligent devices like switches.

---

**Subnetting**:
Subnetting is the process of dividing a larger network into smaller, more manageable sub-networks, or subnets. This is done by borrowing bits from the host portion of an IP address(portion of an IP address is the part that identifies a specific device (host)) to create additional network addresses. Subnetting improves network performance and security by reducing broadcast traffic and isolating segments of the network.
