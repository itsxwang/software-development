import { useLocation } from "react-router-dom"
function Joker() {
    const routerlocation = useLocation()
    console.log(routerlocation.state) // Output: /joker
    console.log(window.history.state);
    return (
        <div className="joker">
            <h1>Joker</h1>
            <p>Why so serious?</p>
        </div>
    )
}
export default Joker