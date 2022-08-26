import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const printValues = (e) => {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <>
      <br />
      <h1>Login</h1>
      <br />
      <form onSubmit={printValues}>
        <label> Username: </label>
        <input
          name='username'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label> Password: </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login
