import { useEffect, useState, useMemo } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'


function App() {
  const [num, setNum] = useState(0)
  const [theme, setTheme] = useState('light')

  const getitems = useMemo(() => {
    return (i: number) => {
      return [i + num, i + 1 + num, i + 2 + num]
    }
  }, [num])

  const navigate = useNavigate()
  function handleclick(e: React.FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;

    if (target.value.toLowerCase() === 'users') {
      navigate('/users', {
        state: {
          users: target.value
        }
      })
    } else if (target.value.toLowerCase() === 'about') {
      navigate('/about')
    } else if (target.value.toLowerCase() === 'home') {
      navigate('/')
    }
    else if (target.value.toLowerCase() === 'joker') {
      console.log('joker')
      navigate('/joker',
        {
          state: {
            joker: target.value,
            animals: 'red'
          }
        })
    }
  }
  return (
    <div>

      <Link to="/users">Users</Link>

      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <List getitems={getitems} />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme ({theme})</button>
      <div><input type="text" onChange={handleclick} /></div>
      <Outlet />
    </div>
  )
}

function List({ getitems }: { getitems: (i: number) => number[] }) {
  const [items, setItems] = useState<number[]>([])

  useEffect(() => {
    console.log('run')
    setItems(getitems(1))
    console.log(getitems(2))
  }, [getitems])

  return (
    <div>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}


export default App