[A great resource for CSP (Content Secure Policy)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)

- XSS ( control which resources areloaded ( basically from which sources ))
- [Can be used to prevent ClickJacking](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#clickjacking_protection)
- [To ensure all resources are served from HTTPS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests)
- Require the use of trusted types, to help defend against client-side XSS ( basically use for sanitization of user input before include it in the client page ).
