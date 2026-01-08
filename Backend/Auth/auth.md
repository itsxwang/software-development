[Auth (react)- Overview](https://youtu.be/AcYF18oGn6Y?si=3Xj26rvwn5jpXMxn&t=87)
    - JWTs: a JSON object that is encoded and signed to be safely transmitted over a network. It contains a set of claims about the subject of the token, a signature that proves the authenticity of the token, and an expiration time that determines how long the token is valid for.
    - Access Token vs Refresh Token
        - Access Token: short-lived token used to access protected resources. It is typically valid for a few minutes to an hour. Generally store in memory, for security.
        - Refresh Token: long-lived token used to obtain new access tokens when the current access token expires. It is typically valid for days or weeks.And not share to frontend, only store in httpOnly cookie.

- [Two auth patterns: Stateful and Stateless](https://youtu.be/OWeruyqhiTo?si=cmO06YLNqlmY9PRB&t=57)

- [How overall authen  authentication works](https://youtu.be/AcYF18oGn6Y?si=LN3AbnsyaDBC2Ahr&t=297)

- [React codebase implementation](https://youtu.be/AcYF18oGn6Y?si=HnKX4mAh8z09nOx3&t=817)