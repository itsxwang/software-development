import { useState, useEffect } from 'react';
import Todo from './Todo'
import classes from '../styles/TodoContainer.module.scss';
import classesTodos from '../styles/Todos.module.scss';

function TodoContainer() {
  const [tasks, setTasks] = useState<
    { taskName: string; priority: 'Low🟡' | 'Mid🟢' | 'High🔴', Date: string }[]
  >
    (
      localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!) :
        [
          { taskName: 'Clean the house', Date: "2025-04-16T14:04", priority: 'Mid🟢' },
          { taskName: 'Buy groceries', Date: "2025-04-16T14:04", priority: 'High🔴' },
          { taskName: 'Go for a walk', Date: "2025-04-16T14:04", priority: 'Low🟡' }
        ]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // ← this guarantees it only runs when `tasks` changes


  const [adding, setAdding] = useState(false)

  function handleAdd() {
    setAdding(true)
    const todoContainer = document.querySelector('#todoContainer')!;

    setTimeout(() => {

      todoContainer.scrollTop = todoContainer.scrollHeight;
    }, 10)

  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    const formData = new FormData(e.target as HTMLFormElement);
    e.preventDefault();
    setTasks(tasks => {
      const inputTaskName = formData.get('taskName') as string;
      const inputTaskDate = formData.get('Date') as string;
      const unique = tasks.filter(t => { (t.toLowerCase() === inputTaskName.toLowerCase() && t.Date === inputTaskDate) });
      if (unique.length !== 0) {
        // If task already exists, don't add it again.
        return tasks
      } 
  else {
      return [...tasks, {
        taskName: inputTaskName,
        priority: formData.get('priority') as 'Low🟡' | 'Mid🟢' | 'High🔴',
        Date: inputTaskDate
      }]
      }
    })
    setAdding(false)
  }


  return (
    <>
      <button className={classes.addBtn} onClick={handleAdd} >
        Add Todo
      </button>



      <div className={classes.todoContainer} id='todoContainer'>

        {tasks.map((task) => (
          <Todo
            key={`${task.taskName}-${task.Date}`}
            taskName={task.taskName}
            taskDate={task.Date}
            priority={task.priority}
            setTasks={setTasks}
          />
        ))}

        {adding && (
          <form onSubmit={handleSubmit} className={classesTodos.todos}>
            <div className={classesTodos["wave-group"]} >
              <input required type="text" className={classesTodos["input"]} name='taskName' />
              <span className={classesTodos["bar"]}></span>
              <label className={classesTodos["label"]}>
                <span className={classesTodos["label-char"]} style={{ "--index": 0 } as React.CSSProperties}>T</span>
                <span className={classesTodos["label-char"]} style={{ "--index": 1 } as React.CSSProperties}>a</span>
                <span className={classesTodos["label-char"]} style={{ "--index": 2 } as React.CSSProperties}>s</span>
                <span className={classesTodos["label-char"]} style={{ "--index": 3 } as React.CSSProperties}>k</span>
              </label>
            </div>

            <input type="datetime-local" name='Date' placeholder="Task Date" required />
            <select required name='priority' className={classesTodos.selectInput}>
              <option value="" disabled defaultChecked>Select Priority</option>
              <option value="High🔴">High🔴</option>
              <option value="Mid🟢">Mid🟢</option>
              <option value="Low🟡">Low🟡</option>
            </select>
            <button type="submit" className={classesTodos.btns}><p className={classesTodos.text}>Add</p></button>
            <button onClick={() => setAdding(false)} className={classesTodos.btns}><p className={classesTodos.text}>Cancel</p></button>
          </form>

        )}

      </div>

    </>
  );
}

export default TodoContainer;

