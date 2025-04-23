[React-router dom, and guide to setup the routing](https://youtu.be/lAFbKzO-fss?si=h_gto59SVxc8si9t&t=24047)

## What is Routing?
- **Routing** ***is the process of determining what to display to the user based on the URL they are trying to access***. It allows you to create a single-page application (SPA) that can dynamically change the content displayed without requiring a full page reload.

- **React Router** is basically a library that allows you to setup a routing and navigation for your app. It provides components and functions to manage the navigation state and render the appropriate components based on the current URL.

- Additionally, it supports nested routes, route parameters, and programmatic navigation, making it a powerful tool for building complex applications.

- [Set up nested routes](https://youtu.be/lAFbKzO-fss?si=gkh6ifdvnQ42ZOZ7&t=24467)
- [How to prevent the look like, the page is reloading, by using `<Link/>` and `<Outlet/>`, so basically it will not reload(refresh) the page and prevents component to re-render](https://youtu.be/lAFbKzO-fss?si=mb4J-UHrAoYWTBsd&t=24927)

- [Programmaticly navigate users by `useNavigate` Hook](https://youtu.be/lAFbKzO-fss?si=HQ17dTSS6dIkL2wf&t=25187)
- [Passing state to route, in `useNavigate` object, and accessing component(that associated with that url, that we pass `useNavigate` object) using `useLocation` hook](https://youtu.be/lAFbKzO-fss?si=2WVjcK7ByX4np4Hn&t=25517)


Note: **The state property will be null even you pass in `useNavigate` Hook if you go to path by typing in search bar instead of going programatically to path** 
- [See more when state property will be null and when not, even you pass in `useNavigate` Hook](https://youtu.be/lAFbKzO-fss?si=jSDKvs0cjZtGyHV4&t=25847)

