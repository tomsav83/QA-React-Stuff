import { useState } from 'react'

const Converter = () => {
  const [miles, setMiles] = useState(0)

  const [kilometers, setKilometers] = useState(0)

  const convertToKms = (e) => {
    const newValue = parseInt(e.target.value)
    setMiles(newValue)
    setKilometers(newValue * 1.6)
  }

  return (
    <>
      <label htmlFor=''>Miles: </label>
      <input
        type='number'
        id='mileInput'
        value={miles}
        onChange={convertToKms}
      />
      <br />
      <br />
      <label htmlFor=''>Kilometers: </label>
      <input
        type='number'
        id='kmInput'
        value={kilometers}
        onChange={(e) => setKilometers(e.target.value)}
      />
      <br />
      <br />
    </>
  )
}

export default Converter
