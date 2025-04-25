import { useEffect, useState, useMemo } from 'react'
import { Outlet, Link } from 'react-router-dom'
import GotoLink from './components/GotoLink'
import Time from './components/timer'

function App() {
  const [num, setNum] = useState(0)
  const [theme, setTheme] = useState('light')

  const getitems = useMemo(() => {
    return (i: number) => {
      return [i + num, i + 1 + num, i + 2 + num]
    }
  }, [num])

  return (
    <div>
      <Link to="/users">Users</Link>

      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <List getitems={getitems} />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme ({theme})</button>
      <GotoLink />
      <Outlet />

      <Time/>
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