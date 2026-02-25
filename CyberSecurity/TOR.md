How Tor Works

**Tor** (The Onion Router) is a free, open-source network designed to enable anonymous communication online. It works by routing your internet traffic through a series of randomly selected volunteer-operated servers—called relays—across the globe, making it extremely difficult to trace your activity back to you.

### How Tor Works: Onion Routing
- **Multi-Layered Encryption**: When you send a request through Tor, your data is encrypted multiple times, like layers of an onion. Each layer is decrypted only at a specific relay in the network.
- **Three-Step Path**: Your traffic passes through three types of relays:
  1. **Entry (Guard) Node**: The first relay that knows your real IP address but not your destination.
  2. **Middle Relay**: This relay sees only the previous and next relay in the chain—it doesn’t know your identity or final destination.
  3. **Exit Node**: The final relay decrypts the last layer, revealing the destination website. The website sees traffic coming from the exit node’s IP, not yours.
- **No Single Point of Knowledge**: Because no single relay knows both the origin and destination of the traffic, surveillance or traffic analysis becomes ineffective.

### Key Features
- **Anonymity**: Your IP address and location are hidden from websites and your ISP.
- **Censorship Resistance**: Users in restrictive countries can access blocked content.
- **Onion Services**: Websites can host content anonymously using `.onion` addresses, accessible only via Tor.
- **Privacy by Design**: Tor Browser (based on Firefox) blocks tracking, doesn’t save history or cookies, and resists fingerprinting.

### Limitations & Risks
- **Exit Node Vulnerabilities**: Exit nodes can see unencrypted traffic (e.g., HTTP sites), so always use HTTPS.
- **Performance**: Routing through multiple relays slows down browsing.
- **Not Fully Untraceable**: Advanced attacks (e.g., traffic correlation, timing analysis) can potentially deanonymize users.
- **Misuse**: While used for legitimate purposes (journalists, activists, whistleblowers), Tor is also used for illegal activities.

Tor is maintained by **The Tor Project**, a nonprofit organization, and relies on over 7,000 volunteer relays worldwide. It is not illegal to use Tor—only illegal activities conducted over it are against the law.