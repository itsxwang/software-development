DORA in DHCP stands for Discover, Offer, Request, and Acknowledge—the four-step process used by the Dynamic Host Configuration Protocol to automatically assign IP addresses and network configuration parameters to devices on a network.

- Discover: The client broadcasts a DHCP Discover message to locate available DHCP servers. The message uses source IP 0.0.0.0 and destination IP 255.255.255.255, indicating a broadcast to all devices on the local subnet.
- Offer: One or more DHCP servers respond with a DHCP Offer message, proposing an IP address, subnet mask, default gateway, DNS server, and lease duration. The offer is sent to the client’s MAC address.
- Request: The client selects one offer and sends a DHCP Request message to the chosen server, confirming acceptance of the IP address. This message is broadcast to inform other servers that their offers were rejected.
- Acknowledge: The DHCP server sends a DHCP Acknowledge (ACK) message to confirm the IP assignment. The client now has a valid IP address and can communicate on the network.
This process ensures dynamic, automated, and conflict-free IP address allocation, making network management efficient and scalable. In networks with multiple subnets, a DHCP relay agent may be used to forward messages between subnets when the client and server are not on the same broadcast domain.
