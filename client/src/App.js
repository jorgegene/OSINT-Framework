import React, { Component, useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";
import store from './store';
import ReactTimeout from 'react-timeout'
import { connect } from 'react-redux';
import { refreshToken } from "./actions/auth";

export const history = createBrowserHistory();


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Logout = React.lazy(() => import('./views/pages/logout/Logout'));

const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
let timer = null;

class App extends Component {

  refreshTokenTask = () => {

    this.props.setTimeout(() => {
      const refresh = JSON.parse(localStorage.getItem('refresh_token'));
      
      if (refresh !== null){
        this.props.refreshToken(refresh)

      }
      this.refreshTokenTask()
    }, 1000 * 60 * 2)
  }
  componentDidMount() {
    document.title = "OSINT Lab";

    this.refreshTokenTask()
    }
  



  render() {

    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/logout" name="Logout Page" render={props => <Logout {...props}/>} />

              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      refreshToken: (refresh) => dispatch(refreshToken(refresh))
  }
};

export default connect(null, mapDispatchToProps)(ReactTimeout(App));
