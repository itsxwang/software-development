import { useState, useOptimistic, useRef } from "react";

export default function App() {
  const [todo, setTodo] = useState([{ title: "todo", id: 0 }]);
  const [optimisticTodo, setOptimisticTodo] = useOptimistic(todo, updaterFunc);

  const [item, setItem] = useState("");
  const id = useRef(1);

  function updaterFunc(prev, newOptimisticState) {
    return [...prev, newOptimisticState];
  }

  function handleAdd() {
    console.log("optimisticTodo", id);
    const newItem = { title: item, id: id.current++ };
    setOptimisticTodo(newItem);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "todos",
        body: item,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setTodo((prev) => [...prev, newItem]);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <form>
        <label htmlFor="todo">
          New Todo:
          <br />
          <input
            type="text"
            id="todo"
            value={item}
            onInput={(e) => setItem(e.target.value)}
          />
        </label>
        <hr />

        <button formAction={handleAdd}>Add</button>
      </form>

      <h2>Your TODOS:</h2>

      {optimisticTodo.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </>
  );
}
