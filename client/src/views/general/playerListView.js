import React, { useState, useRef } from "react";
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
  CRow,
  CDataTable,
  CCollapse,
  CFormGroup,
  CSelect,
  CCardHeader,
  CLabel,
  CInputCheckbox
} from '@coreui/react'
import { withRouter } from "react-router";

import { DocsLink } from 'src/reusable'
import { Link } from "react-router-dom";

import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";


const Typography = (props) => {
  let history = useHistory();


  const [username, setUsername] = useState("");

  const usersData = [
    {id: 0, name: 'John Doe', location: '2018/01/01', email: 'Guest', socia_media: 'Twitter, Instagram', phone: 20000},
    {id: 1, name: 'Samppa Nori', location: '2018/01/01', email: 'Member', socia_media: 'Twitter, Instagram, LinkedIn', phone: 20000},

  ]

  const [details, setDetails] = React.useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const fields = [
    { key: 'name', _style: { width: '20%'} },
    { key: 'email', _style: { width: '20%'} },
    { key: 'phone', _style: { width: '20%'} },
    { key: 'socia_media', _style: { width: '40%'} },
    { key: 'location', _style: { width: '20%'} },

    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]



  const handleSubmit = (e, props) => {
    console.log("submit",e, username)
    e.preventDefault();
    const form = e.currentTarget
    props.history.push({
      pathname: `/tools/finder/${username}`,
      //search: '?query=abc',
      state: { username: username }
    });


  };

  return (
    <CContainer>
      <CRow >

      <CCard style={{width:"80rem"}} >
            <CCardHeader>
              Search Filters
              <DocsLink name="-Input"/>
            </CCardHeader>
            <CCardBody >
            <CRow>

            <CForm style={{width:"70%"}} onSubmit={(e) => handleSubmit(e, props)} >
            <CCol lg="9" >
            <CRow>
                <CCol xs="4">
                <CFormGroup>

                <CLabel htmlFor="ccmonth">Name</CLabel>

                <CInput
                  label="Name"
                  placeholder="Enter name or username"
                  value={username}
                  onChange={onChangeUsername}
                />
                </CFormGroup>

                </CCol>

              </CRow>
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
                    <CLabel>Social Media</CLabel>
                  </CCol>
                  <CCol md="11">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Twitter</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Facebook</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">LinkedIn</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Instagram</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Other</CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                </CRow>

                <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Experience</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>

                    </CSelect>
                  </CFormGroup>
                </CCol>
                  
              </CRow>

              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Status</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">Free-Agent</option>
                      <option value="2">Contract</option>
                      <option value="3">No experience</option>
                      <option value="4">4</option>

                    </CSelect>
                  </CFormGroup>
                </CCol>

              </CRow>
              <CRow style={{padding:"1rem"}}>
              <div className="form-actions">
                      <CButton type="submit" color="primary" >Search</CButton>
                      <CButton color="secondary" style={{marginLeft: "0.3rem"}}>Reset</CButton>
                    </div>
              </CRow>

              </CCol>
              </CForm>

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
      </CRow>

    <CRow >

    <CCard style={{width:"80rem", padding: "2rem"}}>
    <h3>Results</h3>
    <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={10}
      hover
      sorter
      pagination
      scopedSlots = {{
        'name':
          (item)=>(
            <td>
              <Link  to={{
              pathname: `/tools/finder/${item.name}`,
              state: { username: item.name }
            }}  style={{ textDecoration: 'none'}}>
                {item.name}
              </Link>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton onClick = {(event) => history.push("/players/"+item.name, {data:item})}
                    size="sm" color="info">
                    Player Details
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
     </CCard>
     </CRow>

     </CContainer>

  )
  
}

export default withRouter(Typography)
