import { useState } from 'react';
import Todo  from './Todo'
import classes from '../styles/TodoContainer.module.scss';
import classesTodos from '../styles/Todos.module.scss';

function TodoContainer() {
  const [tasks, setTasks] = useState<
    { taskName: string; priority: 'Low🟡' | 'Mid🟢' | 'High🔴', Date: string }[]
  >([
    { taskName: 'Clean the house', Date:"2025-04-16T14:04", priority: 'Mid🟢' },
    { taskName: 'Buy groceries', Date:"2025-04-16T14:04" , priority: 'High🔴' },
    { taskName: 'Go for a walk', Date:"2025-04-16T14:04" , priority: 'Low🟡' }
  ]);

  let counter = 0
  const [adding,setAdding ] = useState(false)
  
  function handleAdd() {
    setAdding(true)
    console.log(adding)
    const todoContainer = document.querySelector('#todoContainer')!;

    setTimeout(() => {
      
      todoContainer.scrollTop = todoContainer.scrollHeight;
    },10)

  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    const formData = new FormData(e.target as HTMLFormElement);
    e.preventDefault();
    setTasks(tasks => [...tasks, { taskName: formData.get('taskName') as string,
       priority: formData.get('priority') as 'Low🟡' | 'Mid🟢' | 'High🔴',
        Date: formData.get('Date') as string
      }])
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
          key={counter++}
          taskName={task.taskName}
          taskDate={task.Date}
          priority={task.priority}
          setTasks={setTasks}
          />
        ))}

        {adding && (
          <form onSubmit={handleSubmit} className={classesTodos.todos}>
            <input type="text" name='taskName' placeholder="Task Name" required />
            <input type="datetime-local" name='Date' placeholder="Task Date" required />
            <select required name='priority' className={classesTodos.selectInput}>
              <option value="" disabled selected>Select Priority</option>
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