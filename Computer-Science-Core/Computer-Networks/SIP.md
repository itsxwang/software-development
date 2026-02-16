Sip protocol

**Session Initiation Protocol (SIP)** is a signaling protocol used to establish, manage, and terminate real-time communication sessions over IP networks, including voice calls, video conferencing, instant messaging, and multimedia collaboration.

- **OSI Layer**: SIP operates at the **application layer (Layer 7)** of the Internet protocol suite.
- **Primary Function**: It handles session setup, modification, and teardown, while the actual media (voice, video) is transmitted using protocols like **RTP (Real-time Transport Protocol)** or **SRTP**.
- **Key Components**:
  - **User Agents (UAs)**: Devices like SIP phones or softphones that act as both **User Agent Clients (UAC)** when initiating calls and **User Agent Servers (UAS)** when responding.
  - **SIP Servers**: Include proxy servers (forward requests), redirect servers (provide next-hop info), and registrar servers (manage user location).
- **Common Ports**:
  - **Port 5060**: Used for unencrypted SIP signaling (UDP or TCP).
  - **Port 5061**: Used for encrypted SIP traffic via **TLS**.
- **Core Methods**:
  - **INVITE**: Initiates a session.
  - **ACK**: Confirms receipt of a successful response (2xx).
  - **BYE**: Terminates a session.
  - **CANCEL**: Cancels an ongoing INVITE.
  - **OPTIONS**: Queries supported features.
  - **INFO**: Sends in-call information (e.g., DTMF tones).
- **Standards**: Defined by the **IETF** in **RFC 3261**, with earlier versions in RFC 2543.
- **Use Cases**: Found in VoIP systems, unified communications (e.g., Microsoft Teams, Zoom), SIP trunking, emergency calling (E911), and IoT-based communication.

SIP is text-based, similar to HTTP and SMTP, enabling easy debugging and integration. It supports both **unicast** (two-party) and **multicast** (multiparty) sessions and is widely adopted due to its flexibility, scalability, and interoperability across diverse platforms and devices.