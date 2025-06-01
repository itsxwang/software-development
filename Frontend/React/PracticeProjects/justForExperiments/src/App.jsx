import { useActionState } from "react";

async function increment(previousState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
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
  const [state, formAction,isPending] = useActionState(increment, "Human");
  const className = state.error ? {color: "red"} : {color: "green"};
  return (
    <>
      <form>
        <label htmlFor="username">
          Enter your username:
          <input type="text" name="username" />
        </label>
        <button formAction={formAction}>{isPending ? "Submitting" : 'Sumbit'}</button>
      </form>

      {state !== "Human" ? (
        <p style={className}>
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


