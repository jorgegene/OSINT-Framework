import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CButton,
  CContainer,
  CRow,
  CInputCheckbox,
  CSelect,
  CCard,
  CCardBody,
  CInput,
  CCardHeader,
  CLabel,
  CFormGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { NavLink } from 'react-router-dom'

const Scouting = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

  return (
    <CContainer >

        <CCard>
            <CCardHeader>
              X-Keyword Filters
            </CCardHeader>
            <CCardBody>
            <CRow>

            <CCol lg="5" >

              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Region</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                  
              </CRow>

              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Rank</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">Challenger</option>
                      <option value="2">Master</option>
                      <option value="3">Diamond1</option>

                    </CSelect>
                  </CFormGroup>
                </CCol>
                  
              </CRow>
              <CRow>

              <CFormGroup row style={{marginLeft:"0.6rem"}}>
                  <CCol md="3">
                    <CLabel>Other</CLabel>
                  </CCol>
                  <CCol md="11">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">TOP</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">JUNGLE</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">MID</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">SUPP</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">ADC</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                </CRow>

                <CRow>


                  
              </CRow>

              <CRow>



              </CRow>


              <CRow style={{padding:"1rem"}}>
              <div className="form-actions">
                      <CButton type="submit" color="primary">Search</CButton>
                      <CButton color="secondary" style={{marginLeft: "0.3rem"}}>Reset</CButton>
                    </div>
              </CRow>
              </CCol>

              <CCol md="3">
              <CContainer className="border-left">

                <div >
                <h3>Estimated Results</h3>
                <h3>100</h3>
                </div>

                </CContainer>

              </CCol>
              </CRow>

            </CCardBody>
        </CCard>

<CCard>
<CCardHeader>
  Results
</CCardHeader>
<CCardBody>

</CCardBody>
</CCard>
                </CContainer>

  )
}

export default Scouting
