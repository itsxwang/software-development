[Read this docs on `keeping componets pure` to know more about this topic](https://react.dev/learn/keeping-components-pure)

Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more. By strictly only writing your components as pure functions, you can avoid an entire class of baffling bugs and unpredictable behavior as your codebase grows. To get these benefits, though, there are a few rules you must follow.

**Purity: Components as formulas**
- In computer science (and especially the world of functional programming), a pure function is a function with the following characteristics:

    - It minds its own business. It does not change any objects or variables that existed before it was called.
    - Same inputs, same output. Given the same inputs, a pure function should always return the same result.

    - (Added), Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call—that makes them impure!

**Note:** However, it’s completely fine to change variables and objects that you’ve just created while rendering. [This is called **“local mutation”**—it’s like your component’s little secret.](https://react.dev/learn/keeping-components-pure#local-mutation-your-components-little-secret)

React’s rendering process must always be pure. Components should only return their JSX, and **not change any objects or variables that existed before rendering**—that would make them impure!

- [And that's why to detect these kind of impure functions, React offers **strict mode**(where it renders every component twice), read about that here, especically how its help to detect impure functions](https://react.dev/learn/keeping-components-pure#detecting-impure-calculations-with-strict-mode)



- [Where you can cause side effects(Changing the data—are called side effects. They’re things that happen “on the side”, not during rendering.) ](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)

In React, side effects(***operations that impact things outside the component***) usually belong inside **event handlers**. **Event handlers are functions that React runs when you perform some action**—for example, when you click a button. Even though event handlers are defined inside your component, **they don’t run during rendering**! So **event handlers don’t need to be pure**.


[Why does React care about purity?](https://react.dev/learn/keeping-components-pure#why-does-react-care-about-purity)