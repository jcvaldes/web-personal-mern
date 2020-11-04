import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Sistema de rutas basico</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users" component={Users} />
          {/* si no pongo switch carga siempre el 404 */}
          <Route component={Error404} /> 
        </Switch>
      </div>
    </Router>
  )
}
function Home() {
  return <h2>Estamos en componente home</h2>
}

function Contact() {
  return <h2>Estamos en componente contact</h2>
}
function Users() {
  return <h2>Estamos en componente users</h2>
}
function Error404() {
  return <h2>Error 404</h2>
}

export default App
