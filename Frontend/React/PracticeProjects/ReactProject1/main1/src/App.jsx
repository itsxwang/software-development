import React, { useEffect, useState } from 'react'

function App() {
  const [name,setName] = useState(()=> {
    const savedName = localStorage.getItem("name")
    console.log(JSON.parse(savedName))
    return savedName ? JSON.parse(savedName) : ""
  }) 

  function changeHnadler(e) {
    setName(e.target.value)
    // localStorage.setItem("name",JSON.stringify(e.target.value))
  }
  useEffect(() => {
    console.log("useEffect")
    localStorage.setItem("name",JSON.stringify(name))
  }, [name])
  return (
    <div>
          <h1>⚡:  {name}</h1>
          <input type="text" value={name} onChange={changeHnadler} />
    </div>
  )
}

export default App;