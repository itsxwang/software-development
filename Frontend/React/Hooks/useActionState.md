[`useActionState`](https://youtu.be/NVddtG6syJg?si=yw_WDsC913Cq-BJT) is a Hook that allows you to update state based on the result of a form action.

```jsx
import { useActionState } from "react";

async function increment(previousState, formData) {
  console.log(formData);
  return previousState + 1;
}

export default function App() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form /*action={formAction} , or here */>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
```

- [using `formdata`](https://youtu.be/NVddtG6syJg?si=8KVU0J6Mj1sScpWe&t=427)

## Example

```jsx
import { useActionState } from "react";

// you will generally make this function in server components
async function action(previousState, formData) {
  const username = formData.get("username");
  if (username.length < 3) {
    return {
      success: false,
      error: "Username must be at least 3 characters long.",
    };
  } else {
    return {
      success: true,
      username,
    };
  }
}

export default function App() {
    // initialValue of state is "Human"
    // when the form is submitted, the action function will be called with previousState and formData
  const [state, formAction] = useActionState(action, "Human");
  return (
    <>
      <form>
        <label htmlFor="username">
          Enter your username:
          <input type="text" name="username" />
        </label>
        <button formAction={formAction}>Sumbit</button>
      </form>

      {state !== "Human" ? (
        <p>
          {!state.error
            ? "Success! " + "Username change to " + state.username
            : "Error: " + state.error}
        </p>
      ) : (
        <p>Username: {state}</p>
      )}
    </>
  );
}
```

- [`isPending` Parameter of useActionState](https://youtu.be/NVddtG6syJg?si=kt-bstEp7XF4hxZ-&t=657)

- [Now what if we want to pass some more parameters in action function](https://youtu.be/NVddtG6syJg?si=2mxhNQm6Qk4IJxqD&t=727)

- [why to use `useActionState` over `onSubmit`](https://youtu.be/NVddtG6syJg?si=EIf-xWzGqYT_-8GU&t=821)