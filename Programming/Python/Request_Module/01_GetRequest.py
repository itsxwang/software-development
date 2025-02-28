import requests
# simple get request
r = requests.get("https://dog.ceo/api/breeds/image/random")
print(r.status_code)
print(r.text)
print(r.json()) # parse response as json , but use only if response is valid json , r.json() convert response text to python dictionary 
print(r.headers) # get response headers , in python dictionary , so you can access specific header like r.headers['content-type']
# r.ok : returns true if status code is between 200 and 400

# r.text gives us content of response in string format , r.content gives us bytes of content
# get request with params(basically query parameters) and custom headers


r2 = requests.get("https://httpbin.org/get", params={"key1": "value1", "key2": "value2"},headers={"Accept": "application/json"})
print(r2.url) # give us url that requests generated for us `https://httpbin.org/get?key1=value1&key2=value2`
# same as doing this : requests.get("https://httpbin.org/get?key1=value1&key2=value2")
print(r2.text)

# we can also use timeout parameter to set timeout for request , so that if request takes longer than timeout then it will throw exception , otherwise if we not set that and response not comes it will wait indefinitely
# https://youtu.be/tb8gHvYlCFs?si=-rMvptCLiXY8h4Nu&t=1271 , see this video clip by Corey Schafer to understand timeout parameter