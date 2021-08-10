import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/booking/Home'
import Login from 'pages/auth/Login'
import Register from 'pages/auth/Register'
import { TopNav } from 'components'

function App(): JSX.Element {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>
  )
}

export default App
