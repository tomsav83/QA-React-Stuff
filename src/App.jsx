import React from 'react'
import './App.css'
import MyComponent from './MyComponent'
import Converter from './Converter'
import Login from './Login'
import Car from './Car'
import Counter from './Counter'
import Cart from './Cart'
import DataRequests from './DataRequests'
import FilmRequest from './FilmRequest'
import CrudReact from './CrudReact'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Params from './Params'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/MyComponent'>Props</Link>
        <Link to='/Converter'>Converter</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Car'>Car</Link>
        <Link to='/Counter'>Counter</Link>
        <Link to='/Cart'>Cart</Link>
        <Link to='/FilmRequest'>Film Request</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/MyComponent' element={<MyComponent />} />
          <Route path='/Converter' element={<Converter />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Car' element={<Car />} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/DataRequests' element={<DataRequests />} />
          <Route path='/FilmRequest' element={<FilmRequest />} />
          <Route path='/CrudReact' element={<CrudReact />} />
          <Route path='/params/:param' element={<Params />} />
        </Routes>
      </BrowserRouter>
      {/* <br />
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
        <div>
          <h1>Requests Example</h1>
          <DataRequests />
        </div>
        <br />
        <br />
        <div>
          <h1>Film Request</h1>
          <FilmRequest />
        </div>
        <br />
        <br />
        <div>
          <h1>CRUD React Exercise</h1>
          <CrudReact />
        </div>
        <br />
        <br /> */}
    </div>
  )
}

export default App
