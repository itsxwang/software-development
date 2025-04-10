import React from 'react'
import ShoppingList from './Components/ShoppingList'
import './style.css'

function App() {
  const [items,setItems] = React.useState(() => {
    return []
  })
return (
    <div className='mainContainer'>
  <h1 className='mainT'>Your Shopping List</h1>

  <div className='tableContainer scroll-container'>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}.</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <ShoppingList items={items} setItems={setItems} />
</div>

)
}

export default App