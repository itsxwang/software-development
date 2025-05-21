[Watch this video to understand Cookies vs Local Storage vs Session Storage](https://youtu.be/GihQAC1I39Q?si=jUqlglyocWp6PEK-)

## Similarities and Differences

### [Similarities](https://youtu.be/GihQAC1I39Q?si=-bLo0dqy5MDLaw_I)
Cookies, localStorage, and sessionStorage are all mechanisms for storing data in a user's browser. They share the purpose of enabling client-side storage but differ in behavior, use cases, and limitations.

### [Differences](https://youtu.be/GihQAC1I39Q?si=AFvJtLW59rR1efv9&t=85)
Each storage type has unique characteristics that make it suitable for specific scenarios. Below is a detailed breakdown of their differences.

---

## Detailed Explanation

### [Cookies](https://youtu.be/GihQAC1I39Q?si=09aDad02b9vHM44R&t=98)
- **Purpose**: Primarily used for server-client communication.
- **Storage Location**: Stored in the browser and sent to the server with every HTTP request.
- **Size Limit**: Approximately 4KB per cookie.
- **Expiration**: Can have an expiration date. If none is set, they are session cookies and are deleted when the browser is closed.
- **Use Cases**:
    - Storing small amounts of data that need to be sent to the server (e.g., session IDs, authentication tokens).
    - Tracking user behavior across sessions (e.g., analytics, preferences).
- **Security**:
    - Can be marked as `HttpOnly` (not accessible via JavaScript) and `Secure` (sent only over HTTPS).
- **Drawback**: Sent with every HTTP request, which can slow down requests if too much data is stored.

### [localStorage](https://youtu.be/GihQAC1I39Q?si=RWYt0ijw9xkUM2eX)
- **Purpose**: Used for storing data on the client side without sending it to the server.
- **Storage Location**: Stored in the browser and persists even after the browser is closed.
- **Size Limit**: Typically 5-10MB per domain (varies by browser).
- **Expiration**: Data persists indefinitely unless explicitly cleared by the user or programmatically.
- **Use Cases**:
    - Storing user preferences (e.g., theme settings, language selection).
    - Caching data for offline use.
    - Storing data that doesn't need to be sent to the server.
- **Security**: Accessible via JavaScript, so sensitive data should not be stored here.
- **Drawback**: No built-in expiration mechanism.

### [sessionStorage](https://youtu.be/GihQAC1I39Q?si=srM0oMoIAAwpJSlp&t=300)
- **Purpose**: Similar to localStorage, but data is tied to a single browser session.
- **Storage Location**: Stored in the browser and cleared when the browser tab or window is closed.
- **Size Limit**: Typically 5-10MB per domain (varies by browser).
- **Expiration**: Data is cleared when the session ends (i.e., when the tab or window is closed).
- **Use Cases**:
    - Storing temporary data for the duration of a session (e.g., form inputs, temporary state).
    - Avoiding data persistence across sessions.
- **Security**: Like localStorage, it is accessible via JavaScript and should not store sensitive data.
- **Drawback**: Limited to the session's lifespan.

---

## Comparison Table

| Feature                | Cookies                  | localStorage           | sessionStorage         |
|------------------------|--------------------------|-------------------------|-------------------------|
| **Data Sent to Server** | Yes (with every request) | No                      | No                      |
| **Storage Limit**       | ~4KB                    | 5-10MB                 | 5-10MB                 |
| **Expiration**          | Configurable (or session) | Persistent             | Session-only           |
| **Scope**               | All browser windows/tabs | All browser windows/tabs | Current tab/window only |
| **Use Cases**           | Server communication, tracking | Persistent client-side data | Temporary client-side data |

---

## Practical Examples

### [Cookie Practical Example](https://youtu.be/GihQAC1I39Q?si=DFrlKcIKAV3pmSTC&t=597)
Cookies are often used for authentication and tracking purposes. For example, storing a session ID to maintain a logged-in state.

### [Practical Example](https://youtu.be/GihQAC1I39Q?si=srM0oMoIAAwpJSlp&t=300)
localStorage and sessionStorage can be used for storing user preferences or temporary form data, ensuring a seamless user experience.

---

## Key Takeaways
- Use **cookies** for server-related tasks like authentication or tracking.
- Use **localStorage** for persistent client-side data that doesn't need to be sent to the server.
- Use **sessionStorage** for temporary data that should only last for the duration of a session.