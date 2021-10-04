import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { useDispatch, useSelector } from "react-redux";
const Login = React.lazy(() => import('../views/pages/login/Login'));


const TheLayout = (props) => {
  const state = useSelector((state) => state);
  console.log(state, props)
  const path = props.location.pathname
  //if (!state.auth_reducer.isLoggedIn && path !== "/" && path !== "/#" && path !== "/#/" ){
  //  return <Login  {...props} />
    if (!state.auth_reducer.isLoggedIn ){
      return <Login  {...props} />
}
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent {...props}/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
