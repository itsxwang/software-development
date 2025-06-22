# TCP (Transmission Control Protocol) and UDP (User Datagram Protocol)

## Overview

TCP and UDP are core protocols of the Internet Protocol Suite, enabling data transmission between devices on a network. Each serves different purposes and is suited to specific types of applications.

---

## TCP

**Transmission Control Protocol (TCP)** is a connection-oriented protocol used for reliable, in order, and error-checked data transmission over the Internet.\
TCP works with the Internet Protocol (IP) to establish and maintain a network conversation allowing applications to exchange data reliably.

- **Connection-Oriented:** Establishes a connection using a three-way handshake before data transfer and and a four-step process to close connections properly.
- **Reliability:** Guarantees delivery of data packets in the correct order, retransmitting lost packets as needed.
- **Flow and Congestion Control:** Manages data flow to prevent network congestion and ensure efficient communication.
- **Use Cases:** Ideal for applications where data integrity and order in which packets are transmitted are critical, such as:
    - Web browsing (HTTP/HTTPS)
    - Email (SMTP, IMAP, POP3)
    - File transfers (FTP, SFTP(Secure File Transfer Protocol))

---

## UDP

**User Datagram Protocol (UDP)** is a connectionless protocol used for on fast, lightweight data transmission with minimal overhead.

- **Connectionless:** Sends data without establishing a connection, reducing latency.
- **Unreliable:** Does not guarantee delivery, in order transmission, or retransmission of loss packets.
- **Low Overhead:** Suitable for scenarios where speed is more important than reliability.
- **Use Cases:** Commonly used for real-time or time-sensitive applications, including:
    - Video streaming
    - Online gaming
    - Voice over IP (VoIP)
    - DNS lookups

---

## Summary Table

| Feature         | TCP                          | UDP                        |
|-----------------|-----------------------------|----------------------------|
| Connection      | Connection-oriented          | Connectionless             |
| Reliability     | Reliable, ordered delivery  | Unreliable, unordered      |
| Overhead        | Higher                       | Lower                      |
| Use Cases       | Web, email, file transfer   | Streaming, gaming, VoIP    |

Choose TCP or UDP based on your application's requirements for reliability, speed, and data integrity. Like for example for Data Integrity and reliable data transmission TCP is better as it ensures relaiable transmsission of data packets and ensure the packets which were lost during transmission are retransmitted .