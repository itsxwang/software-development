# CS Networks

[Computer networks](https://youtu.be/PhjHXeMNpp8?si=cy35LP7bcs8rLIs9&t=87) are set of different devices and connections between them.

Networking -> When 2 or more devices comes to exchange data with each other we called it networking.

- Can be big as Internet or small as just two computers connected with cable.

- Multiple devices like mobile phones, computers, servers, routers, switches, wireless access points, etc. can be connected to each other and form a network.

**IOT (Internet of Things)** is a network of physical devices that are connected to the internet and can collect and exchange data. Examples include smart home devices, wearables, and industrial sensors.

---

IP (Internet Protocol) is a set of rules that govern how data is sent and received over the internet. It defines how devices communicate with each other and how data is routed between them.

- **IP Address**: A unique identifier assigned to each device on a network, allowing it to communicate with other devices. It can be IPv4 (e.g., 192.168.1.1) or IPv6 (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
  - IPV4 adress's each digit(octet) assigned 8 byte (0-255) so in total each IPv4 address is of 32 byte
  - More about IPs in separate file

- [Bandwidth, Throughput, latency & Jitter](https://youtu.be/PhjHXeMNpp8?si=MnetNgD1_AOqiq8y&t=5597)
  - Max amount of data that can be transmitted over link (especially link which has lowest bandwidth among all links comes in b/w host and destination) in the specific amount of time
  - [Throughput](https://youtu.be/PhjHXeMNpp8?si=QKUXozo96CgIOV6t&t=5887)
    - Actual amount of data that can be transmitted, due to overhead that add on each layer of TCP/IP or OSI model of networking
    - Oversubscription: When total processing throughput is lower than cumulative bandwidth of all ports
    - Different throughput on different layers
  - [Latency & its diff types](https://youtu.be/PhjHXeMNpp8?si=1Rq3Kfs9nRsqn9_j&t=6397)
  - Latency -> One way delay, Data tranfer time from 1 device to another -
    - Queueing delay -> As Multiple Apps at same time can transmit packets at same time, queuing of data packets can happen - Processing delay
    - Processing delay -> Processing of data at each layer between different networking devices

    - Transmission delay -> Transmission Delay is the time required to push all the bits of a packet onto the transmission link. It depends on the packet size (in bits) and the link bandwidth (in bits per second), calculated as Transmission Delay = Packet Size / Bandwidth. It reflects how long it takes to "transmit" the entire packet from the sender's device onto the network.

    - Propogation delay -> Propagation Delay is the time it takes for a signal to travel from the sender to the receiver through the transmission medium. It depends on the distance between the two points and the propagation speed of the signal in the medium (e.g., ~2×10⁸ m/s in fiber optics). It is a physical delay governed by the laws of physics and is independent of packet size or bandwidth
