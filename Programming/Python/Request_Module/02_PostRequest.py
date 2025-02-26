import requests
# post request using requests module

# data you wanna send
data = {
    "key1": "value1",
    "key2": "value2"
}

# httpbin.org is a free service for testing HTTP requests
r = requests.post("https://httpbin.org/post", data=data)
print(r.status_code)
print(r.text)
print(r.json())
