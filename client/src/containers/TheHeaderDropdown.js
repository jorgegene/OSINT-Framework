import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const TheHeaderDropdown = () => {

  const state = useSelector((state) => state);
  let loggedIn = state.auth_reducer.isLoggedIn
  console.log("isLoggedIn", loggedIn)
  let comp;

  if (!state.auth_reducer.isLoggedIn) {

    return     <CDropdown inNav
          className="c-header-nav-items mx-2"
          direction="down"
        >
    <CDropdownToggle className="c-header-nav-link" caret={false}>
      <div className="c-avatar">
      <CIcon name="cil-user" className="mfe-2" />

      </div>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">

      <CDropdownItem>
      <Link to="/login"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        Log In
        </Link> 

      </CDropdownItem>

        </CDropdownMenu>
      </CDropdown>

  } else {


  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
        <CIcon name="cil-user" className="mfe-2" />

        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>

        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>

        <CDropdownItem divider />
        <CDropdownItem>
    <Link to="/logout"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <CIcon name="cil-lock-locked" className="mfe-2" />
      Log Out
      </Link> 

    </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
  }
}

export default TheHeaderDropdown
