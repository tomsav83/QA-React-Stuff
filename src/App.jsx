import React from 'react'
import './App.css'
import MyComponent from './MyComponent'
import Converter from './Converter'
import Login from './Login'
import Car from './Car'
import Counter from './Counter'
import Cart from './Cart'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hi There,</h1>
        <h2>My name is Tom</h2>
        <br />
        <div>
          <h1>Props</h1>
          <MyComponent />
        </div>
        <br />
        <br />
        <div>
          <h1>Converter</h1>
          <Converter />
        </div>
        <br />
        <br />
        <div>
          <h1>Login</h1>
          <Login />
        </div>
        <br />
        <br />
        <div>
          <h1>Car</h1>
          <Car />
        </div>

        <div>
          <h1>Counter</h1>
          <Counter />
        </div>
        <br />
        <br />

        <div>
          <h1>Cart</h1>
          <Cart />
        </div>
        <br />
        <br />
      </header>
    </div>
  )
}

export default App
