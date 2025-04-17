import { useState,useEffect } from 'react'
import  classes from '../styles/Timer.module.scss' 


function Timer() {
    const [time, setTime] = useState(()=>getFormattedTime());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(() => getFormattedTime());
        }, 1000);
      
        return () => {
          clearInterval(interval);
        }; /* this cleanup is because of React.StrictMode, because when <React.StrictMode> runs `useEffect` again, it ensures previous interval(that becomes on component mounts) is 
              cleared(by the cleanup) before new Interval(created when component re-renders by <React.StrictMode>) is set */ 
      }, []);
      
  return (
    <div className={classes.timer}>
        {time}
    </div>
  )
}


// Timer 
// ------------------------------------------------------ */ 


function getFormattedTime() {
    const now = new Date();
  
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${day} ${date}, ${hours}:${minutes}:${seconds}`;
  }

export default Timer