import requests
# simple get request
r = requests.get("https://dog.ceo/api/breeds/image/random")
print(r.status_code)
print(r.text)
print(r.json()) # parse response as json , but use only if response is valid json , json() give us python dictionary in python
print(r.headers) # get response headers , in python dictionary , so you can access specific header like r.headers['content-type']
# r.ok : returns true if status code is 200-299 unlike 

# get request with params(basically query parameters) and custom headers
r2 = requests.get("https://httpbin.org/get", params={"key1": "value1", "key2": "value2"},headers={"Accept": "application/json"})
# same as doing this : requests.get("https://httpbin.org/get?key1=value1&key2=value2")
print(r2.text)