# https://youtu.be/tb8gHvYlCFs?si=-LC16WbwGwRw9sUb&t=1015 , see this video clip by Corey Schafer to understand basic auth using requests module

import requests

# if auth has wrong username or password(other than that you set in httpbin) that will give you 401 status code 
r = requests.get("https://httpbin.org/basic-auth/pas/s", auth=("pas", "s"))
print(r.status_code)
print(r.text)

