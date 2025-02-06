[HTTP crash course | http Methods | http headers by Chai Aur Code](https://youtu.be/qgZiUvV41TI?si=D8wBiqr0dqY4_N1l)  **English Captions Available**

[Directly go to Http Headers](https://youtu.be/qgZiUvV41TI?feature=shared&t=323)

[Directly go to Http Methods](https://youtu.be/qgZiUvV41TI?si=Wldu_7axZN0Tj3pW&t=870)

[Directly go to Status Codes](https://youtu.be/qgZiUvV41TI?si=RXsp31HcAl_Be4c6&t=1128)


# What is HTTP ? 
- HTTP, or Hypertext Transfer Protocol, is an application-layer protocol that enables web browsers and servers to communicate and share information over the internet .

- HTTP operates as a request-response protocol, where a client, such as a web browser, sends a request to a server, and the server responds with the requested data. This protocol supports various operations, including fetching web pages, images, videos, and posting content to servers.

- Basically request is just like a message that client/frontend(commonly browser) send to backend.
- In JavaScript we can use `XMLHttpRequest`  class to creates a new HTTP message or request object. This object is used to make requests to servers(backend or we can say API) and retrieve(get) data or post data , patch , etc..., from that server.   

## XMLHttpRequest Example

This example demonstrates how to use the `XMLHttpRequest` object in JavaScript to fetch data from an API. The example code fetches a random Chuck Norris joke from the `https://api.chucknorris.io/jokes/random` API.

## Code Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data.value);
    }
};

xhr.send();
```

## Explanation

### 1. Creating an XMLHttpRequest Object
```javascript
const xhr = new XMLHttpRequest();
```
- This initializes an `XMLHttpRequest` object, allowing us to make HTTP requests.

### 2. Opening the Request
```javascript
xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
```
- `xhr.open(method, url)`: Configures the request.
  - `'GET'`: Specifies the HTTP method (GET request).
  - The second parameter is the API URL to fetch the joke.

### 3. Defining the `onload` Event Handler
```javascript
xhr.onload = function() {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data.value);
    }
};
```
- The `onload` event fires when the response has been received successfully.(we can also use addEventListener method to handle this event) 
- `xhr.status === 200` checks if the request was successful (status code 200 = OK).
- `xhr.responseText` contains the response data as a JSON string.
- `JSON.parse(xhr.responseText)` converts the JSON string into a JavaScript object.
- `console.log(data.value);` prints the joke to the console.

### 4. Sending the Request
```javascript
xhr.send();
```
- This sends the request to the server.

## Why Use `xhr.onload` Instead of `xhr` Directly?

- `xhr` is an object representing the request.
- `onload` is an event handler that executes when the request completes.
- Since the request is asynchronous, we need an event listener (`onload`) to handle the response when it's ready.
- Without `onload`, we wouldn't know when the response is available, and trying to access `xhr.responseText` directly might return `undefined`.

## Summary
- `XMLHttpRequest` allows making HTTP requests in JavaScript.
- `xhr.onload` ensures the response is handled after the request completes.
- The example fetches a random Chuck Norris joke and prints it to the console.

## XMLHttpRequest (XHR) and `onload` Event Handler

`xhr` is an object, and you're thinking correct that it's not an element. However, `xhr` is an instance of the `XMLHttpRequest` class, which has several methods and properties, including event handlers like `onload`.

The reason for using `xhr.onload` is to define a callback function that will be executed when the request successfully completes. This is an asynchronous operation, meaning the code doesn't stop and wait for the response. Instead, it sets up an event listener that is triggered when the request finishes.

`xhr.onload` is specifically designed to handle the event of the request being loaded (i.e., when the server responds with data).

If we didn’t use `xhr.onload` (or other event handlers), the response would not be processed, and we'd never be able to handle the result of the request.

Note : If you use addEventListener method instead of `xhr.onload` then you have to pass `load`  instead of `onload` in first parameter of addEventListener method.

`xhr.send()` is a asynchronous code , [To understand this see this clip by **SuperSimpleDev**](https://youtu.be/EerdGm-ehJQ?si=-LCYnjflzm1QYrOP&t=71141)

In summary, `xhr.onload` is used to specify the behavior when the request completes, and it's part of the `XMLHttpRequest` object's event-handling mechanism.

## Additional Resources
- [MDN XMLHttpRequest Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

---
Note : We can also send request to differet url paths (if those paths are supported) and each url path can give us different response , its depend on the person who make that backend which response he associate with corresponding url path / requests . 