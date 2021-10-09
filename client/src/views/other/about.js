import React, { useState } from 'react'
import {
  CCol,
  CContainer,
  CRow,
  CInputCheckbox,
  CSelect,
  CCard,
  CCardBody,
  CInput,
  CCardHeader,

  CImg,
} from '@coreui/react'


import logo from "../../assets/images/find-person.jpg";

const Random = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <CContainer >

        <CCard>
            <CCardHeader>
              <h3>Find the Real Person Behind the Online Identity</h3>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CContainer  style={{padding: "1rem", width: "60rem"}}>
                    <CImg
                    src={logo}
                    
                    fluid
                    align="center"
                    class="mb-2"
                    style={{width: "100%"}}
                  />    
                </CContainer>
          
              </CRow>

            <CRow>

              <CContainer style={{padding:"3rem"}} >
                <h4>
                OSINT Lab is a web tool that allows investigators to search the digital footprint of a user in his social media.

                </h4>
              </CContainer>

              </CRow>

            </CCardBody>
        </CCard>
        <CCard>
            <CCardHeader>
              <h3>How it works?</h3>
            </CCardHeader>
            <CCardBody>
            <CRow>
              <CCol>
              <CContainer style={{padding:"1rem"}} >
                  The framework uses OSINT tools and techniques to retreive the data. Check the
                  <a href="https://github.com/jorgegene/OSINT-Framework" target="_blank"> source repository</a> to get more info.
              </CContainer>
              </CCol>

              </CRow>

            </CCardBody>
        </CCard>

      </CContainer>

  )
}

export default Random
