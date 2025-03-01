`axios` is a popular library like `fetch` for making HTTP requests in JavaScript. It provides a simple and easy-to-use interface for sending requests, handling responses, and error handling.


🚀 How to Use Axios in JavaScript
1️⃣ Install Axios
If you're using Node.js or a bundler (Webpack, Vite, etc.), install Axios via npm or yarn:


# Using npm
`npm install axios`

# Using yarn
`yarn add axios`

If you're using Axios in the browser without a package manager, add it via CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
2 - Now you can use Axios in your JavaScript code to make HTTP requests:
Like this 
```javascript
axios({
  method: "post",
  url: "https://jsonplaceholder.typicode.com/posts",
  data: { title: "New Post" }
});
```
Or like this
```javascript
axios
  .post("https://jsonplaceholder.typicode.com/posts", { title: "New Post" , body: { title: "New Post" } })
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
``` 
Or like this by making a object of axios
```javascript
// Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" }
});

// Use the Axios instance to make requests
apiClient
  .post("/posts", { title: "New Post" })
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
```



# Axios vs Fetch: Key Differences

## Overview
Both `fetch` and `axios` are popular choices for making HTTP requests in JavaScript. Here's a detailed comparison to help you choose the right tool.

## 🔍 Key Features Comparison

### 1. Error Handling
- **Axios** automatically rejects a promise for HTTP status codes outside `200-299`.  
- **Fetch** only rejects on network failures(not for 300-399, 400-499, 500-599), so you must manually check `response.ok`.
```javascript
// Fetch - Manual error handling required
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .catch(error => console.error("Error:", error));

// Axios - Automatic error handling
axios.get("https://api.example.com/data")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error:", error));
```

### 2. JSON Data Handling
```javascript
// Fetch - Manual JSON handling
fetch("https://api.example.com/users")
  .then(response => response.json()) // promise that will resolve to json
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

// Axios - Automatic JSON handling , direct no need to manually parse 
axios.get("https://api.example.com/users")
  .then(response => console.log(response.data))
  .catch(error => console.error("Error fetching data:", error));
```

### 3. Timeout Management
```javascript
// Axios - Built-in timeout , automatically rejects the promise with AbortError if the request takes longer than the specified timeout 
axios.get("https://api.example.com/data", { 
  timeout: 5000  // 5 seconds
});

// Fetch - Requires manual timeout implementation
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);
fetch("https://api.example.com/data", { signal: controller.signal });
/* Basically when we do controller.abort() , controller.signal will be set to true and fetch will abort the request , 
 and AbortController works because fetch is designed to listen to controller.signal. 
 You cannot just use a regular variable like `let shouldAbort = true;` 
 to cancel a request, because fetch does not check arbitrary variables. */
```

### 4. Request Interception
Interceptors for Global Request/Response Handling
Axios allows intercepting requests/responses globally (useful for authentication, logging, etc). Interceptors are middleware-like functions that allow you to modify requests or responses globally before they are handled by `.then()` or `.catch()` 
Fetch has no direct support for interceptors. 
```javascript
// Axios interceptors example 

import axios from "axios";

// ✅ Create an Axios instance
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" }
});

// 🛠️ **Request Interceptor**
apiClient.interceptors.request.use(config => {

    /* 
    Here, the config object is specific to the current request and includes:

method (GET, POST, etc.)
url (baseURL, and /posts/1 that we specified when we make requests )
headers (combined from axios.create() + any new headers added when making a request)
Any other request-specific properties (like request body for POST requests)

    */
  console.log(`🔼 Sending ${config.method.toUpperCase()} request to: ${config.url}`);

  
  // Add Authorization Header (Example: Token from LocalStorage)
  config.headers["Authorization"] = `Bearer your-token`;
  
  return config;
}, error => {
  console.error("❌ Request Error:", error);
  return Promise.reject(error);
});

// 🛠️ **Response Interceptor**
apiClient.interceptors.response.use(response => {
  console.log(`✅ Response received from ${response.config.url}:`, response.data);
  return response;
}, error => {
  console.error("❌ Axios Error:", error);

  // Handle Unauthorized (401) globally
  if (error.response && error.response.status === 401) {
    console.warn("🔒 Unauthorized! Redirecting to login...");
    window.location.href = "/login";  // Example: Redirect to login page
  }

  return Promise.reject(error);
});

// 📝 **Function to Make GET & POST Requests**
async function fetchData() {
  try {
    // ✅ GET Request (Interceptors applied)
    const getResponse = await apiClient.get("/posts/1");
    console.log("📜 GET Response Data:", getResponse.data);

    // ✅ POST Request (Interceptors applied)
    const postResponse = await apiClient.post("/posts", {
      title: "New Post",
      body: "Post content",
      userId: 1
    });
    console.log("📝 POST Response Data:", postResponse.data);

  } catch (error) {
    console.error("🚨 Request Failed:", error);
  }
}

// 🔥 Call function to test
fetchData();

/*
🔹 How Interceptors Work Here
1️⃣ Request Interceptor:
Logs HTTP method & URL before sending.
Adds an Authorization header.
2️⃣ Response Interceptor:
Logs successful responses.
Handles 401 errors (e.g., redirects user to login page).
3️⃣ Making Requests:
A GET request to fetch a post.
A POST request to create a new post.
Both requests go through the interceptors before being sent. 
 */



/* Output:

🔼 Sending GET request to: /posts/1
✅ Response received from /posts/1: { id: 1, title: "...", body: "...", userId: 1 }
📜 GET Response Data: { id: 1, title: "...", body: "...", userId: 1 }

🔼 Sending POST request to: /posts
✅ Response received from /posts: { id: 101, title: "New Post", body: "Post content", userId: 1 }
📝 POST Response Data: { id: 101, title: "New Post", body: "Post content", userId: 1 }

*/

```
// Fetch - Requires custom wrapper
```javascript
async function fetchInterceptor(url, options = {}) {
  try {
    const response = await fetch(url, options);

    // Handle errors based on response status
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
      throw new Error(`HTTP Error ${response.status}: ${errorData.message || response.statusText}`);
    }

    return response.json(); // Return parsed JSON response
  } catch (error) {
    console.error("Fetch Interceptor Error:", error);
    throw error; // Re-throw error to mimic Axios's `Promise.reject`
  }
}

// Usage Example
fetchInterceptor("https://api.example.com/data")
  .then(data => console.log("Data received:", data))
  .catch(error => console.error("Request failed:", error));



```



## 🎯 When to Use What

### Choose Axios When:
- You need automatic error handling
- You want simpler JSON data handling
- You need built-in request timeout
- You require interceptors
- You need broad browser support

### Choose Fetch When:
- You want zero dependencies
- You need fine-grained control
- You're building a lightweight application
- You require native browser API

## 🚀 Final Recommendation

- **Axios**: Better for larger applications with complex requirements
- **Fetch**: Better for smaller projects prioritizing minimal dependencies

## Browser Support
- **Axios**: Works in all modern browsers + IE11 (with polyfills)
- **Fetch**: Modern browsers only (needs polyfill for older browsers)