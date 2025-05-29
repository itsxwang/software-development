# This makrdown contains detail process of how DNS(Domain Name System) Works, and how it resolves a domain name to an IP address


User type a domain name in a web browser (e.g., **www.example.com**)

## DNS Resolution Process
When a browser needs to resolve a domain name (e.g., **www.example.com**) into an IP address, it follows a multi-step process involving various DNS servers. Here's a detailed breakdown:

## 1. DNS Recursive Resolver
The process begins when the browser sends a DNS query to a recursive resolver, typically operated by your Internet Service Provider (ISP) or a third-party DNS service like Google DNS or Cloudflare DNS. The recursive resolver is responsible for handling the query and returning the final IP address to the client(browser).


## 2. Root DNS Server
If the recursive resolver doesn't have the answer cached, it queries a root DNS server. The root server responds with a referral to the appropriate Top-Level Domain (TLD) DNS server based on the domain extension (e.g., `.com`, `.net`).

## 3. TLD DNS Server
The recursive resolver then queries the referred TLD DNS server, which responds with a referral to the authoritative DNS server responsible for the specific domain (e.g., `example.com`).

## 4. Authoritative DNS Server
Finally, the recursive resolver queries the authoritative DNS server for the domain, which provides the IP address associated with the requested domain name. 

## 5. Response to Client
The recursive resolver returns the IP address to the client's browser, which can then initiate a connection to the web server to access the website.

---
This process ensures that domain names are accurately translated into IP addresses, enabling users to access websites using human-readable addresses.