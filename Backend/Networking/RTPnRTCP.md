RTP in CS Networking

**Real-time Transport Protocol (RTP)** is an application-layer protocol designed for delivering audio and video over IP networks. RTP is used in real-time communication applications such as **VoIP, video conferencing (e.g., WebRTC), online gaming, and live streaming**.

### Key Features of RTP:
- **Packet-based**: Breaks media streams into packets for transmission.
- **Timestamps**: Each packet includes a timestamp to enable **playback synchronization** and handle jitter.
- **Sequence Numbers**: Used to detect **lost packets** and **reorder out-of-sequence packets**.
- **Payload Type**: Identifies the encoding format (e.g., AAC, H.264) of the media data.
- **Synchronization Source (SSRC)**: Uniquely identifies the source of a media stream.
- **Contributing Sources (CSRC)**: Lists sources that contributed to a mixed stream (e.g., in a conference call).

### RTP and RTCP:
RTP works closely with the **RTP Control Protocol (RTCP)**, which:
- Monitors **quality of service (QoS)** and provides feedback on network performance.
- Sends statistics like packet loss, jitter, and round-trip delay.
- Helps synchronize multiple media streams (e.g., audio and video).
- Uses **consecutive ports**: RTP uses an **even-numbered port**, and RTCP uses the **next odd-numbered port**.

### Transport Protocol:
RTP typically runs over **UDP** because:
- UDP is **connectionless and lightweight**, minimizing latency.
- **TCP is unsuitable** for real-time traffic due to retransmissions (which cause delays), congestion control, and flow control mechanisms that can stall data delivery.
- UDP supports **multicast**, enabling efficient one-to-many communication (e.g., live webinars).

### Applications:
- **VoIP (Voice over IP)**
- **Video conferencing (Zoom, Teams, WebRTC)**
- **Streaming media (YouTube, Netflix, Spotify)**
- **IP television (IPTV)**
- **Push-to-talk services**

RTP does **not guarantee delivery** or order, but it provides the **timing and synchronization mechanisms** essential for real-time media. It is often used with **signaling protocols** like **SIP** to set up sessions and negotiate parameters.