STUN and TURN

**STUN (Session Traversal Utilities for NAT)** enables devices behind NATs to discover their public IP address and port, facilitating direct peer-to-peer connections. It works by sending a request to a public STUN server, which responds with the client’s mapped public address, allowing peers to attempt direct communication.

**TURN (Traversal Using Relays around NAT)** acts as a fallback when direct connections fail, typically due to restrictive NAT types like symmetric NAT or firewalls blocking UDP. Unlike STUN, TURN **relays all media traffic** between peers through a server, ensuring connectivity at the cost of increased latency, bandwidth usage, and infrastructure costs.

**ICE (Interactive Connectivity Establishment)** orchestrates the use of both STUN and TURN by systematically testing all available connection methods—host, STUN-derived (server-reflexive), and TURN-relayed—prioritizing direct connections and falling back to relays only when necessary.

> **Key Insight**: In real-world WebRTC usage, **75–80% of sessions succeed via STUN alone**, while **20–25% require TURN**, especially on mobile networks with carrier-grade NATs. A well-designed application should use **STUN as primary** and **TURN only as fallback**.