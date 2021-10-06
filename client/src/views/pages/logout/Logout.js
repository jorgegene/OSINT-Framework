import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { logout } from "../../../actions/auth";



const Logout = (props) => {
  const dispatch = useDispatch();

  dispatch(logout());
  props.history.push("/");
  window.location.reload();

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>

            <CCard className="p-4">
                <CCardBody className="text-center">
                  <div>
                    <h2>Signed Out</h2>
                    <p>Bye!.</p>
                    <Link to="/login">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>LogIn again!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Logout
