

const App = () => {
window.addEventListener('resize', (e) => {
    console.log(window.innerWidth);
});
    const mockUsers = [
        {
            id:1,
            name:"John",
        },
        {
            id:2,
            name:"Jane",
        }
    ]
    
    return (
        <div>
            {mockUsers.map((user) => {
                return (
                    <div key={user.id}>
                        <li>{user.name}</li>
                    </div>
                )
            })}
        </div>
    )
}



export default App

