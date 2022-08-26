import { useParams } from 'react-router-dom'

const Params = () => {
  const { param } = useParams()

  return <p>{`Parameter: ${param}`}</p>
}

export default Params
