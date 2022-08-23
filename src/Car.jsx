import { useState } from 'react'

const Car = () => {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [colour, setColour] = useState('')
  const [year, setYear] = useState('')

  return (
    <>
      <h2>
        Input your cars make, model, colour and year into the fields below
      </h2>
      <form>
        <label> Make: </label>
        <label htmlFor='brand'></label>
        <input
          type='text'
          name='brand'
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
        <br />
        <label> Model: </label>
        <label htmlFor='model'></label>
        <input
          type='text'
          name='model'
          value={model}
          onChange={(event) => setModel(event.target.value)}
        />
        <br />
        <label> Colour: </label>
        <label htmlFor='colour'></label>
        <input
          type='text'
          name='colour'
          value={colour}
          onChange={(event) => setColour(event.target.value)}
        />
        <br />
        <label> Year: </label>
        <label htmlFor='year'></label>
        <input
          type='text'
          name='year'
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />
        <br />
      </form>
      <h3>
        You have a {colour} {brand} {model} made in {year}.
      </h3>
    </>
  )
}

export default Car
