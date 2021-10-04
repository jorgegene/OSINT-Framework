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
  const [uTwitter, setuTwitter] = useState("");
  const [uFacebook, setuFacebook] = useState("");
  const [uLinkedin, setuLinkedin] = useState("");
  const [uInstagram, setuInstagram] = useState("");

  const usersData = [
    {id: 0, name: 'Cristiano Ronaldo', date: '2021-10-05 18:00:02 UTC',  socia_media: 'Twitter, Instagram'},
    {id: 1, name: 'Chema Alonso', date: '2021-10-05 18:01:10 UTC',  socia_media: 'Twitter, Instagram, LinkedIn'},

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
    { key: 'date', _style: { width: '20%'} },
    { key: 'socia_media', _style: { width: '40%'} },

    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]


  const  onChangeuTwitter = (e) => {
    const uTwitter = e.target.value;
    setuTwitter(uTwitter);
  };
  const  onChangeuFacebook = (e) => {
    const uFacebook = e.target.value;
    setuFacebook(uFacebook)
  };
  const  onChangeuInstagram = (e) => {
    const uInstagram = e.target.value;
    setuInstagram(uInstagram)
  };
  const  onChangeuLinkedin = (e) => {
    const uLinkedin = e.target.value;
    setuLinkedin(uLinkedin)
  };
  
  const toggleTwitter = () => {
    if (uTwitter == null){
      setuTwitter("");
    } else{
      setuTwitter(null);
    }
  }
  const toggleFacebook = () => {
    if (uFacebook == null){
      setuFacebook("")
    } else{
      setuFacebook(null)
    }
  }
  const toggleInstagram = () => {
    if (uInstagram == null){
      setuInstagram("")
    } else{
      setuInstagram(null)
    }
  }
  const toggleLinkedin = () => {
    if (uLinkedin == null){
      setuLinkedin("")
    } else{
      setuLinkedin(null)
    }
  }
  
  const handleSubmit = (e) => {
    console.log("submit",e, username)
    e.preventDefault();
    const form = e.currentTarget
    props.history.push({
      pathname: `/tools/finder/${username}`,
      //search: '?query=abc',
      state: { 
        username: username,
      uTwitter: uTwitter,
      uFacebook: uFacebook,
      uInstagram: uInstagram,
      uLinkedin: uLinkedin, 
      exception: true
    }
    });
  
  };


  return (
    <CContainer>
      <CRow >

      <CCard style={{width:"80rem"}} >
            <CCardHeader>
              Search Filters
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



              <CFormGroup >
                          <CRow style={{marginLeft: "2px"}}>
                          <CLabel>Filter Social Media</CLabel>

                          </CRow>

                    <CFormGroup variant="custom-checkbox" inline style={{marginLeft: "1%"}}>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                        onChange={toggleTwitter}
                        defaultChecked={true}
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Twitter</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" defaultChecked={true} onChange={toggleFacebook}/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Facebook</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" defaultChecked={true} onChange={toggleInstagram} />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Instagram</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" defaultChecked={true} onChange={toggleLinkedin} />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">LinkedIn</CLabel>
                    </CFormGroup>


                </CFormGroup>

                      <CFormGroup variant="label" inline>

                        </CFormGroup>
                            <CFormGroup  >
                            <CLabel >Select username for each social network</CLabel>

                            <CInputGroup   style={{paddingRight: "50%"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>Twitter</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={uTwitter == null}
                                  label="Name"
                                  placeholder="Enter Twitter username"
                                  value={uTwitter}
                                  onChange={onChangeuTwitter}
                                />
                          </CInputGroup>
                          
                          <CInputGroup   style={{paddingRight: "50%", paddingTop: "1rem"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>Facebook</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={uFacebook == null}
                                  label="Name"
                                  placeholder="Enter facebook username"
                                  value={uFacebook}
                                  onChange={onChangeuFacebook}
                                />
                          </CInputGroup>

                        </CFormGroup>

                        <CInputGroup   style={{paddingRight: "50%"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>Instagram</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={uInstagram == null}
                                  label="Name"
                                  placeholder="Enter Instagram username"
                                  value={uInstagram}
                                  onChange={onChangeuInstagram}
                                />
                          </CInputGroup>

                          <CInputGroup   style={{paddingRight: "50%", paddingTop: "1rem"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>LinkedIn</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={uLinkedin == null}
                                  label="Name"
                                  placeholder="Enter LinkedIn username"
                                  value={uLinkedin}
                                  onChange={onChangeuLinkedin}
                                />
                          </CInputGroup>




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
    <h3>Recent Searches</h3>
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
