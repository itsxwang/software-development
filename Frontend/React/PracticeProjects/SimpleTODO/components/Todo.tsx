import { useState } from 'react'
import classes from '../styles/Todos.module.scss'

function Todo({ taskName, priority, taskDate, setTasks }:
    {
        taskDate: string,
        taskName: string,
        priority: 'Low🟡' | 'Mid🟢' | 'High🔴',
        setTasks: React.Dispatch<React.SetStateAction<{
            taskName: string;
            priority: "Low🟡" | "Mid🟢" | "High🔴";
            Date: string;
        }[]>>

    }
) {

    const [taskname, setTaskName] = useState(taskName);
    const [taskdate, setTaskDate] = useState(taskDate);
    const [taskpriority, setPriority] = useState(priority);
    const [isEditing, setEditing] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false)

    const handleEditToggle = () => setEditing(prevValue => !prevValue);

    const handleSave = () => {
        setTasks(prevTasks => {
            if (deleteTask) {
                return prevTasks.filter(task => !(task.taskName === taskName && task.Date === taskDate));
            }

            const unique = prevTasks.filter(t => (t.taskName.toLowerCase() === taskname.toLowerCase() && t.Date === taskdate));
            if (unique.length !== 0) {
                // If task already exists, don't add it again.
                console.log("Task already exists.");
                return prevTasks;
            }
            else {
                return prevTasks.map(task => {
                    console.log(task)
                    if (task.taskName === taskName && task.Date === taskDate) {
                        return {
                            taskName: taskname,
                            priority: taskpriority,
                            Date: taskdate
                        };
                    }
                    return task;

                }
                )
            };
        });
        setEditing(false);
        setDeleteTask(false); // reset the delete checkbox
    };


    const handleDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeleteTask(e.target.checked);
    };


    const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.target.value);
    };

    const handleTaskDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDate(e.target.value);
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value as 'Low🟡' | 'Mid🟢' | 'High🔴');
    };

    return (
        <div className={classes.todos}>
            {isEditing ? (
                <div className={classes["wave-group"]}>
                    <input required type="text" className={classes["input"]} value={taskname} onChange={handleTaskNameChange} />
                    <span className={classes["bar"]}></span>
                    <label className={classes["label"]}>
                        <span className={classes["label-char"]} style={{ "--index": 0 } as React.CSSProperties}>T</span>
                        <span className={classes["label-char"]} style={{ "--index": 1 } as React.CSSProperties}>a</span>
                        <span className={classes["label-char"]} style={{ "--index": 2 } as React.CSSProperties}>s</span>
                        <span className={classes["label-char"]} style={{ "--index": 3 } as React.CSSProperties}>k</span>
                    </label>
                </div>
            ) : (
                <div className={classes.taskname}>{taskname}</div>
            )}
            {isEditing ? (
                <input type="datetime-local" value={taskdate} onChange={handleTaskDateChange} />
            ) : (
                <div className={classes.taskdate}>{formatDate(taskdate)}</div>
            )}
            {isEditing ? (
                <select value={taskpriority} onChange={handlePriorityChange} className={classes.selectInput}>
                    <option value='High🔴'>High🔴</option>
                    <option value='Mid🟢'>Mid🟢</option>
                    <option value='Low🟡'>Low🟡</option>
                </select>
            ) : (
                <div className={classes.taskpriority}>{taskpriority}</div>
            )}
            <button className={classes.btns} onClick={handleEditToggle}><p className={classes.text}>Edit</p></button>
            {isEditing && (
                <>
                    <button onClick={handleSave} className={classes.btns}><p className={classes.text}>Save</p></button>

                    <div className={classes["checkbox-wrapper-30"]}>
                        <span className={classes.checkbox}>
                            <input type="checkbox" onChange={handleDelete} checked={deleteTask} />
                            <svg>
                                <use xlinkHref="#checkbox-30" />
                            </svg>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                            <symbol id="checkbox-30" viewBox="0 0 22 22">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
                                />
                            </symbol>
                        </svg>
                    </div>


                </>
            )
            }
        </div>
    );


    function formatDate(inputDate: string) {

        // Split into date and time
        const [datePart, time] = inputDate.split("T");

        // Split the date into year, month, day
        const [year, month, day] = datePart.split("-");

        // Format the date as "25/4/6" and append the time
        const formatted = `${year.slice(2)}/${parseInt(month)}/${day[1]}, ${time}`;

        return formatted; // Output: "25/4/6, 14:04"

    }

}

export default Todo