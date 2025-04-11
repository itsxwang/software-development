import React from 'react'
    

function ShoppingList({items,setItems}) {
    function submitHandler(e){
        e.preventDefault();
        let name = document.getElementById("nameOfItem").value
        let quantity = document.getElementById("quantity").value
        if (!name || !quantity){
            alert("Please enter a valid name and quantity")
            return;
        }

        setItems([...items,{name:name, quantity:quantity}])
    }
    
  return (
        <form action="test.php" method='post' onSubmit={submitHandler}>

        <div className='nameOfItem'>
            <label htmlFor="nameOfItem">Enter the item you wanna add: </label>
            <input type="text" name="name" id = "nameOfItem" onClick={(e) => {navigator.clipboard.readText().then(text => {e.target.value = text})}}/>
        </div>

        <div className='quantity'>
            <label htmlFor="quantity">Enter the quantity: </label>
            <input type="number" name="quantity" id = "quantity" defaultValue={1} />
        </div>
        <button type="submit">Add</button>
        </form>
  )
}

export default ShoppingList