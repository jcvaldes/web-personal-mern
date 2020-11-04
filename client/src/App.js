import React from 'react'
import './App.scss'
import Admin,  { SignIn }  from './pages/Admin'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <>
      <h1>Estamos en app.js</h1>
      <Admin />
      <SignIn />
      <Home />
      <Contact />
    </>
  )
}


export default App
