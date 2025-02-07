## What is `XMLHttpRequest`?
We can use `XMLHttpRequest`  class to creates a new HTTP message or request object. This object is used to make requests to servers(backend or we can say API) and retrieve(get) data or post data , patch , etc..., from that server. 

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
- The `onload` event fires(calls) automatically when the response has been received successfully.(we can also use addEventListener method to handle this event) 
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

If we didn’t use `xhr.onload` (or `xhr.addEventListener('load',callback))`, the response would not be processed, and we'd never be able to handle the result of the request.

Note : If you use addEventListener method instead of `xhr.onload` then you have to pass `load`  instead of `onload` in first parameter of addEventListener method.

`xhr.send()` is a asynchronous code , [To understand this see this clip by **SuperSimpleDev**](https://youtu.be/EerdGm-ehJQ?si=-LCYnjflzm1QYrOP&t=71141)

In summary, `xhr.onload` is used to specify the behavior when the request completes, and it's part of the `XMLHttpRequest` object's event-handling mechanism.

## Additional Resources
- [MDN XMLHttpRequest Documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

---
***Note*** : 
- We can also send request to differet url paths (if those paths are supported) and each url path can give us different response , its depend on the person who make that backend which response he associate with corresponding url path / requests . 
- The list of all url paths that are supported by the backend for sending requests are also called backend APIs (Application Programming Interfaces). (Apis explained in detail in `api.md` file)



## Another XMLHttpRequest Example: Image Fetching

This example that demonstrates how to use `XMLHttpRequest` to fetch an image as a blob(stands for ***binary large object***) and display it on a webpage using the `FileReader` API.

## Code Explanation

```javascript
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); // this is a backend API provided By `SuperSimpleDev` that responds with an apple image

xhr.responseType = 'blob'; // Set the response type to 'blob' to handle binary data

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const blob = xhr.response; // in response we get this type of thing : ` Blob {size: 60723, type: 'image/jpeg'} ` because we converted response type to blob above
        const reader = new FileReader(); // create a FileReader object

        reader.onload = function() {
            const dataUrl = reader.result; // storing dataUrl of blob(that we read below (`reader.readAsDataURL(blob)`) in dataUrl variable
            console.log(dataUrl); // Log the data URL of blob(as it is stored in dataUrl variable) to the console 
// data url of blob will be like this `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a...`
// - data:image/jpeg;base64, indicates that the data is a base64-encoded JPEG image.
// - The long string after base64, is the actual image data encoded in base64.


            // Create an image element and set its src to the data URL , and we can also copy dataUrl of blob and paste it in the browser address bar to see the image
            const img = document.createElement('img');
            img.src = dataUrl;
            document.body.appendChild(img); // Append the image to the body to see it
        };

        reader.readAsDataURL(blob); //  starts reading the blob and begins converting it into a base64-encoded Data URL , asynchronously . 
    } else {
        console.error('Failed to load image:', xhr.statusText);
    }
});

xhr.addEventListener('error', () => {
    console.error('Request failed');
});

xhr.send(); 
```

### What This Code Does:
1. **Creates an XMLHttpRequest object (`xhr`)** to fetch an image.
2. **Opens a `GET` request** to fetch the image *(server sends the response in **binary format** string)* from a given URL.
3. **Sets the `responseType` to `blob`**, allowing the image to be processed as binary data.
4. **Waits for the request to complete**:
   - If the request is successful (`status === 200`), it retrieves the image data as a `blob`.
   - If it fails, it logs an error message.
5. **Uses `FileReader` to convert the `blob` into a Data URL**:
   - The `FileReader.readAsDataURL(blob)` method starts reading the `blob`.
   - When reading completes, `reader.onload` triggers, containing the converted Data URL.
6. **Creates an `<img>` element** and assigns the Data URL to its `src`.
7. **Appends the image to the document body**, making it visible on the webpage.

### Explanation of Key Concepts

#### What is `FileReader`?
The `FileReader` object allows web applications to asynchronously read file contents (or blobs) as text or data URLs.

- `FileReader.readAsDataURL(blob)`: Converts a blob into a base64-encoded Data URL.
- `FileReader.onload`(here `reader.onload`): A function that is executed when the file is fully read.
- `reader.result`: Holds the converted Data URL after the read operation is complete.

#### What is a `Blob`?
A `Blob` (Binary Large Object) represents immutable raw binary data. It is typically used for:
- Storing images, audio, video or other multimedia content(especially in databases ) .
- It can also store unstructured data like text and binary data in large volumes through cloud services like Azure Blob Storage
- Handling file uploads.
- Processing raw binary content(that comes in response from server) in JavaScript.

In this example, the `xhr.response` is assigned to a `blob`, meaning the image data is retrieved in Blob format rather than as a standard binary string response.

#### Why is `reader.onload` Important?
The `reader.onload` function ensures that the **binary large object (blob)** is fully processed and converted into a **Data URL** before being used in the webpage.

#### What It Does:
1. **FileReader reads the blob**:
   - The `FileReader.readAsDataURL(blob)`(here `reader.readAsDataURL(blob)`) method starts reading the `blob` and converts it into a **base64-encoded Data URL**.

2. **Waits for the reading to complete**:
   - Since reading the blob is an asynchronous operation, the `onload` event ensures that we only access the result after the conversion is finished.

3. **Access the Data URL**:
   - Once the blob is converted, `reader.result` contains the **Data URL** representation of the image.

4. **Uses the Data URL to display the image**:
   - The converted Data URL is assigned to an `<img>` element’s `src` so that the image is displayed in the browser.

#### Why It’s Important:
- If you try to use `reader.result` **before** the conversion is done, it will be `null` or incomplete.
- Ensures that we **wait** for the reading process to finish before using the data.
- Helps in handling **asynchronous** operations properly, ensuring the image loads correctly.

Without `reader.onload`, you'd be trying to access `reader.result` **before it exists**, leading to unexpected behavior.

### Why Do We Need a Blob If the Server Already Sends Binary Data?  

Even though the server sends the **image in binary format**, the `Blob` object is necessary for **handling** that data efficiently within JavaScript. Here’s why:

#### **1. JavaScript Cannot Directly Handle Raw Binary Data**
- The browser **receives** the binary response, but JavaScript cannot directly manipulate or display raw binary data.
- **`Blob` acts as a wrapper** that allows JavaScript to **store and process** binary data conveniently.

#### **2. `responseType = 'blob'` Ensures Proper Binary Handling**
- If you don’t set `xhr.responseType = 'blob'`, the response will default to a **string**.
- This can corrupt binary data because text encoding may interfere with how bytes are interpreted.

#### **3. `Blob` Allows Efficient Memory Usage**
- Instead of storing **binary data in JavaScript variables** (which can be inefficient), `Blob` **stores data in an optimized binary format**.

#### **4. `Blob` Enables File-Like Operations**
- The `Blob` object allows us to treat binary data **like a file**.
- It enables operations such as:
  - **Creating Object URLs** (`URL.createObjectURL(blob)`) → Faster way to display images.
  - **Reading as Data URL** (`FileReader.readAsDataURL(blob)`) → Converts the blob into a format (`base64`) that can be embedded in HTML.
  - **Saving Files Locally** → You can download or manipulate blobs as real files.

#### **5. `Blob` Helps with Security & CORS Handling**
- If the server sends binary data directly **without using a blob**, browsers may block it due to **CORS restrictions**.

#### **Alternative Way to Display the Image**
Instead of converting the blob into a Data URL using `FileReader`, we can also do:

```javascript
img.src = URL.createObjectURL(blob);
```

This method is **faster and more efficient** because it creates a temporary URL for the blob without converting it to base64.

### Summary
This example demonstrates how to:
- Fetch an image as a `blob` using `XMLHttpRequest`.
- Convert it into a Data URL using `FileReader`.
- Display the image dynamically on a webpage.
- Alternatively, use `URL.createObjectURL(blob)` to display the image efficiently.

This approach is useful for working with binary files efficiently in JavaScript applications.
