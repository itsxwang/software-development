import requests

# we  use multiple proxies because if one proxy fails then next proxy will be used


proxy = {
    "http": "http://8.219.97.248:80",
    "https": "http://8.219.97.248:80"
}

# this endpoint will return that ip address that request is comes from to httpbin
url = "http://httpbin.org/ip"  # This will return your public IP


# simple error handling , if proxy is not working
try:
    response = requests.get(url, proxies=proxy, timeout=5)
    print("Response:", response.json())  # Check if proxy is working
except requests.exceptions.RequestException as e:
    print("Proxy failed:", e)

# We specify both "http" and "https" in the proxy dictionary because:
# 1️⃣ HTTP and HTTPS are different protocols:
#    - "http" is used for non-secure sites (http://example.com)
#    - "https" is used for secure sites (https://example.com)
#
# 2️⃣ Some proxies only support HTTP or HTTPS:
#    - If the proxy only supports HTTP, HTTPS requests may fail or bypass the proxy.
#
# 3️⃣ Some proxies require separate handling for HTTP and HTTPS:
#    - Example: An HTTP proxy might be on port 8080, while an HTTPS proxy is on port 8443.
#
# ✅ Best Practice: Always specify both "http" and "https" to ensure all requests go through the proxy.