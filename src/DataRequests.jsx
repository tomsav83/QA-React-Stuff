import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Tune from './Tune'

const DataRequests = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:55999/tunes/getAllTunes')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
  }, []) // componentDidMount

  return (
    <>
      {data.map(({ title, artist, length, rating }) => (
        <Tune
          key={title + artist + length + rating}
          title={title}
          artist={artist}
          length={length}
          rating={rating}
        />
      ))}
    </>
  )
}

export default DataRequests
