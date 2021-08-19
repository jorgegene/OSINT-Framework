import React, { Component } from 'react'
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Details from './Pages/Details'

import Logout from './Pages/Logout'
import NavbarPage from "./components/navbar"




export default class App extends Component {
  constructor(props) {
    super(props);
    var authed = false;
    if (localStorage.getItem("token") != null){
      authed = true
    }
    this.state = {
      authed: authed
    };

  }

  isAuthed = (authed) => {
    this.setState({authed: authed})
  }
render(){
  return (
    <Router>
    <NavbarPage authed={this.state.authed}/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route  path="/search" component={Details} />

        <Route path="/login"   render={(props) => (
          <Login {...props} isAuthed={this.isAuthed} />
        )} />

        <Route path="/logout"   render={(props) => (
          <Logout {...props} isAuthed={this.isAuthed} />
        )} />
        <Route path="/logout" component={Logout} />

        <Route path="/register" component={Register} isAuthed={this.isAuthed} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
}
