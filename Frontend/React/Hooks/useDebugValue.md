# [useDebugValue Hook](https://youtu.be/pTF86K8JZBQ?si=kKpklMupRibuQGGu)

- [We can use `useDebugValue` hook to show some value corresponding to our custom hook](https://youtu.be/pTF86K8JZBQ?si=COdKV05ApXcSda97&t=27)

- [Advance use case for `useDebugValue` use cases](https://youtu.be/pTF86K8JZBQ?si=WBHT1Rhdgi_vz5YF&t=177)

- [Advance `useDebugValue` useCases](https://youtu.be/pTF86K8JZBQ?si=RY8g8iyldMOuWUDQ&t=177)

- [Performance concerns](https://youtu.be/pTF86K8JZBQ?si=1b2FkamxvAvD5VKz&t=307)

## Syntax:
```jsx
// this function only runs in dev mode, when your components tab is open
// in v param `value` comes that we pass in 1st parameter 
// the value we return comes as corresponding value of custom hook
const useDebugValue = (value, (v)=>v  )
```