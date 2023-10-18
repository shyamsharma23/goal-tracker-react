import React from 'react'
import Login from './components/Login'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Goals from './components/Goals';

const App = () => {
  return (
    <div>
      <p>Hello World</p>
      <NavBar/>
   

      <Route path="/login" component={Login}/>
      <Route path="/goals" component={Goals} />
      

    </div>
  )
}

export default App

