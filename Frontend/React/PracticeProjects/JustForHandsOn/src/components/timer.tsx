import { useState, useEffect } from "react"

function Timer() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [color, setColor] = useState('color')

    useEffect(() => {
        const previousInterval = setInterval(() => {
            const time = new Date().toLocaleTimeString()
            setTime(time)
        }, 1000);

        return () => {
            clearInterval(previousInterval)
        }
    }, [time])


    return (

        <div className="container" style={{ marginTop: '10px' }}>
            <select value={color} onChange={(e) => setColor(e.target.value)} >
                <option value="color" disabled > Color </option>
                <option value="red" > Red </option>
                <option value="green"  > Green </option>
                <option value="blue"  > Blue </option>
            </select>
            <div style={{ color: color }}>{time}</div>
        </div>

    )
}

export default Timer