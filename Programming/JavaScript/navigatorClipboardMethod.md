# 📋 `navigator.clipboard` in JavaScript

The `navigator.clipboard` API allows web applications to read from and write to the user's clipboard. This API is part of the **Clipboard API** and is widely used in modern web apps for features like "copy to clipboard" buttons.

## ✅ Availability

- Only works in **secure contexts (HTTPS)**.
- Supported in most modern browsers.
- Clipboard read functionality may require **user gesture** and **permissions**.

---

## ✨ Basic Methods

### 1. `navigator.clipboard.writeText(text)`
Writes the provided string to the clipboard.

```js
navigator.clipboard.writeText("Hello, world!")
  .then(() => {
    console.log("Text copied to clipboard!");
  })
  .catch(err => {
    console.error("Failed to copy: ", err);
  });
```

### 2. navigator.clipboard.readText()
Reads text from the clipboard and returns a Promise that resolves to the clipboard contents.

```js
navigator.clipboard.readText()
  .then(text => {
    console.log("Pasted text: ", text);
  })
  .catch(err => {
    console.error("Failed to read clipboard: ", err);
  });
```

### ⚠️ Permissions & Security
- Clipboard access is considered sensitive.

- Browsers typically block read access unless triggered by a user gesture (e.g., click, key press).

- Writing is generally allowed with user gesture.

You can check permissions using the Permissions API:

```js
navigator.permissions.query({ name: "clipboard-read" }).then(result => {
  if (result.state === "granted" || result.state === "prompt") {
    // Safe to use readText()
  }
});
```

### 🔒 Use Cases
- Copy to clipboard buttons ("Copy URL", "Copy Code", etc.)

- Paste clipboard data into forms or editors

- Sharing content more interactively


### 🛠️ Example: Copy Button

```Html
<button onclick="copyText()">Copy</button>
<input type="text" value="Copied text!" id="myInput" />
```
```js
<script>
  function copyText() {
    const input = document.getElementById("myInput");
    navigator.clipboard.writeText(input.value)
      .then(() => alert("Copied!"))
      .catch(err => alert("Failed to copy"));
  }
</script>
```