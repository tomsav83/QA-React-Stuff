const AddDelete = ({ handleSubmit, setItem, item, items, deleteItem }) => {
  return (
    <div className='Cart'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <br />
        <br />
        <button type='submit'>Add Item to Cart</button>
      </form>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.text}</div>
          <input type='number' />
          <br />
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
export default AddDelete
