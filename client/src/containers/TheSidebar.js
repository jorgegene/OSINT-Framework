import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'
import logo from "../assets/icons/logo-analysta3.png";
import icon2 from "../assets/icons/icon-analysta3.png";

import { sidebarShow } from "../actions/sidebar";

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebar_reducer.show)

  return (
    <CSidebar

      show={show}
      onShowChange={(val) => {
        dispatch(sidebarShow(val))
        console.log("show", show)
      }
      }
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      {/*<CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
          <CImg
            class="c-sidebar-brand-full"
            width={200}
            src={logo}
            block
          />
            <CImg
            class="c-sidebar-brand-minimized"
            width={50}
            src={icon2}
            block
          />
        </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
