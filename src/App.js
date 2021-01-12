import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import ResetPassword from './components/screens/ResetPassword'
import NewPassword from './components/screens/NewPassword'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/changePassword">
        <ResetPassword />
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route>
    </BrowserRouter>

  );
}

export default App;
