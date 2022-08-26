import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Week 6 - React</h1>
      <h2>Home</h2>
      <button type='button' onClick={() => navigate('/FilmRequest')}>
        Go to OMDb Exercise
      </button>
    </div>
  )
}
