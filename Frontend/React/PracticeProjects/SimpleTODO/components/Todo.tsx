import React, { useState } from 'react'
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
                return prevTasks.filter(task => (task.taskName !== taskName) || (task.Date !== taskDate));
            }
            return prevTasks.map(task => {
                if ((task.taskName === taskName) && (task.Date === taskDate)) {
                    return { ...task, taskName, priority, Date: taskDate };
                }
                return task;
            });

        }


        );
        setEditing(false);
    };

    const handleDelete = () => {
        setDeleteTask(!deleteTask);
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
                <input type="text" value={taskname} onChange={handleTaskNameChange} />
            ) : (
                <div className='taskName'>{taskname}</div>
            )}
            {isEditing ? (
                <input type="datetime-local" value={taskdate} onChange={handleTaskDateChange} />
            ) : (
                <div className='taskDate'>{formatDate(taskdate)}</div>
            )}
            {isEditing ? (
                <select value={taskpriority} onChange={handlePriorityChange} className={classes.selectInput}>
                    <option value='High🔴'>High🔴</option>
                    <option value='Mid🟢'>Mid🟢</option>
                    <option value='Low🟡'>Low🟡</option>
                </select>
            ) : (
                <div>{taskpriority}</div>
            )}
            <button className={classes.btns} onClick={handleEditToggle}><p className={classes.text}>Edit</p></button>
            {isEditing && (
                <>
                    <button onClick={handleSave} className={classes.btns}><p className={classes.text}>Save</p></button>
                    <div className="checkbox">
                        <input type="checkbox" id="check-24" name="check" value="" />
                        <label htmlFor="check-24">
                            <span>{/*<!-- This span is needed to create the "checkbox" element -->*/}</span>Done
                        </label>
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