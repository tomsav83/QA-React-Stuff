import { useState } from 'react'
import AddDelete from './AddDelete'

const Cart = () => {
  const [items, setItems] = useState([])
  const [item, setItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      id: new Date().getTime(), // uses time as unique identifier
      text: item, // sets text equal to item
      completed: false,
    }

    setItems([...items].concat(newItem)) // takes in what the new items are and adds to cart array
    setItem('') // resets the setItem input field
  }

  function deleteItem(id) {
    const updatedItems = [...items].filter((item) => item.id !== id)

    setItems(updatedItems)
  }

  return (
    <>
      <h4>Add items to cart:</h4>
      <AddDelete
        handleSubmit={handleSubmit}
        setItem={setItem}
        item={item}
        items={items}
        deleteItem={deleteItem}
      />
    </>
  )
}

export default Cart
