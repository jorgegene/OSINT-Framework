import React, { useState, useRef } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

import { register } from "../../../actions/auth";
import { clearMessage } from "../../../actions/messages";



const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth_reducer);
  const dispatch = useDispatch();

  
  const { message } = useSelector(state => state.message_reducer);


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePassword2 = (e) => {
    const password = e.target.value;
    setPassword2(password);
  };
  const handleRegister = (e) => {
    console.log("here",e)
    e.preventDefault();
    dispatch(clearMessage())

    const form = e.currentTarget

    if (form.checkValidity() === true) {
      //setValidated(true)
      dispatch(register(username, email, password))
        .then(() => {
          props.history.push("/");
          //window.location.reload();
        })
        .catch((err) => {
          console.log("error",err)
          setValidated(false)
        });
    } else {
      e.stopPropagation()
      setValidated(false)
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleRegister}   noValidate    validated={validated}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" required autoComplete="username"   
                           value={username}
                           onChange={onChangeUsername}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" required
                     value={email}
                     onChange={onChangeEmail}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" required autoComplete="current-password" 
                          value={password}
                          onChange={onChangePassword}/>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" required autoComplete="current-password" 
                          value={password2}
                          onChange={onChangePassword2} />
                  </CInputGroup>
                  <CButton color="success" type="submit" block>Create Account</CButton>
                </CForm>
                <CRow>
                    {message && (
                      <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                          {message}
                        </div>
                      </div>
                    )}
                  </CRow>
              </CCardBody>

            {/*               
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter> 
          */}

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
