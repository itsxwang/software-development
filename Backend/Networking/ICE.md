Ice protocol

**Interactive Connectivity Establishment (ICE)** is a protocol designed to enable direct peer-to-peer communication between devices across networks that use **Network Address Translators (NATs)** and firewalls. It is widely used in real-time communication technologies like **WebRTC**, **VoIP**, and video conferencing to establish the most efficient connection path between two endpoints.

### Key Components and Functionality
- **NAT Traversal**: ICE overcomes NAT and firewall barriers by discovering multiple potential network paths (called *candidates*) and testing them for connectivity.
- **Candidate Types**:
  - **Host candidates**: Local IP addresses and ports.
  - **Reflexive candidates**: Public IP addresses and ports as seen through a NAT (discovered via **STUN**).
  - **Relayed candidates**: Addresses assigned by a **TURN server** when direct connections fail.
- **Connectivity Checks**: ICE uses **STUN** and **TURN** protocols to test which candidate pairs can successfully exchange data, prioritizing the lowest-latency, most direct path.
- **Protocol Standard**: The current standard is **RFC 8445**, which obsoletes the earlier RFC 5245. It is maintained by the **IETF** and is used across protocols like SIP, XMPP, and WebRTC.

### Use in WebRTC
- ICE is **an integral part of WebRTC**, handling the negotiation of network information to establish direct media streams between browsers or devices.
- It ensures optimal performance by preferring **UDP** for speed but falling back to **TCP** if needed.

### Other Uses of "ICE"
- **Ice (ZeroC)**: A remote procedure call (RPC) protocol used for distributed systems, not related to network connectivity.
- **Inter-Client Exchange (X11)**: A protocol used in the X Window System for communication between client and server.
- **Information and Content Exchange (B2B)**: An XML-based standard for business content syndication.

For real-time communication over the Internet, **ICE (Interactive Connectivity Establishment)** refers to the IETF-standardized NAT traversal protocol used in WebRTC and similar applications.