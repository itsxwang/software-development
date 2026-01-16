STUN and TURN

**STUN (Session Traversal Utilities for NAT)** enables devices behind NATs to discover their public IP address and port, facilitating direct peer-to-peer connections. It works by sending a request to a public STUN server, which responds with the client’s mapped public address, allowing peers to attempt direct communication.

**TURN (Traversal Using Relays around NAT)** is a protocol that builds on STUN but goes a step further to enable communication between peers when direct peer-to-peer (P2P) connections aren't possible due to network restrictions like firewalls, symmetric NATs, or other traversal issues. While STUN helps peers discover their public IP and port mappings to attempt a direct connection, TURN kicks in as a fallback by providing a mediated path through a server.

### How TURN Works
1. **Allocation Phase**: A client (one of the peers) connects to a TURN server (usually over UDP, TCP, or TLS) and requests an "allocation". This is essentially asking the server to reserve a public IP address and port of itself that can act as a relay point for the client.

2. **Relay Address**: The TURN server responds with a relayed transport address (its own public IP and a dynamically assigned port). The client then shares this relay address with the other peer (often via a signaling server (for example a simple express server) like in WebRTC setups).

3. **Data Relaying**: Instead of sending data directly to each other, the peers send their packets to the TURN server's relay address. The TURN server forwards (relays) the incoming data from one peer to the other, and vice versa. This creates an indirect connection, bypassing the NAT/firewall barriers.

TURN is more resource-intensive than STUN because the server has to handle all the traffic, which can lead to higher latency and bandwidth costs. It's often used in scenarios like VoIP, video calls, or real-time gaming where reliability is critical, and it's a key part of frameworks like WebRTC (where it's combined with STUN and ICE for candidate gathering).

---

### What is a Relay?
In networking (especially in the context of NAT traversal like STUN/TURN), a relay refers to an intermediary server or process that forwards data between two endpoints that can't communicate directly. It's like a middleman: 
- Peer A sends data to the relay.
- The relay receives it and sends it on to Peer B.
- The same happens in reverse.

This "relaying" ensures connectivity in restricted environments but adds overhead (e.g., extra hops, potential bottlenecks). You've probably heard "relay" in discussions about proxies, VPNs, or email servers (SMTP relays), but in TURN specifically, the TURN server itself acts as the relay for UDP/TCP traffic.

---

**ICE (Interactive Connectivity Establishment)** orchestrates the use of both STUN and TURN by systematically testing all available connection methods—host, STUN-derived (server-reflexive), and TURN-relayed—prioritizing direct connections and falling back to relays only when necessary.

> **Key Insight**: In real-world WebRTC usage, **75–80% of sessions succeed via STUN alone**, while **20–25% require TURN**, especially on mobile networks with carrier-grade NATs. A well-designed application should use **STUN as primary** and **TURN only as fallback**.   



