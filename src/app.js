import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbars/Navbar'
import Landing from './components/Navbars/Landing'

import AdminLayout from "layouts/Admin.jsx";
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />           
            <Route path="/admin" render={props => <App/>} />
            <Route path="/app" render={props => <AdminLayout {...props} />} />

            
            
            
          </div>
        </div>
      </Router>
    )
  }
}

export default App