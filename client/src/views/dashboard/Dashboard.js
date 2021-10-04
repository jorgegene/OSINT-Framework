import React, {Component, lazy} from 'react';
import {
  CDropdown,
  CButton,
  CInput,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDropdownToggle,
  CRow,
  CDropdownItem,
  CContainer,
  CDropdownMenu,
  CInputGroup,
  CFormGroup,
  CForm,
  CInputGroupText,
  CInputGroupPrepend,
  CInputCheckbox,
  CLabel,
  CCollapse,
  CInvalidFeedback

} from '@coreui/react'
import CIcon from '@coreui/icons-react'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       showAdvanced: false,
       selectedCategory: "Person ID",
       accordion: 1,
       username: null,
       uTwitter: "",
       uFacebook: "",
       uLinkedin: "",
       uInstagram: ""

    }
  }

  setAccordion = (accordion) => {
    this.setState({ accordion});

  }

  toggleAdvancedSearch = (show) => {
    console.log("here")
    this.setState({ showAdvanced: show});
 };

 selectCategory = (category) => {
  console.log("here", category)

  this.setState({ selectedCategory: category});
};
onChangeUsername = (e) => {
  const username = e.target.value;
  this.setState({ username});
};
onChangeuTwitter = (e) => {
  const uTwitter = e.target.value;
  this.setState({ uTwitter});
};
onChangeuFacebook = (e) => {
  const uFacebook = e.target.value;
  this.setState({ uFacebook});
};
onChangeuInstagram = (e) => {
  const uInstagram = e.target.value;
  this.setState({ uInstagram});
};
onChangeuLinkedin = (e) => {
  const uLinkedin = e.target.value;
  this.setState({ uLinkedin});
};

toggleTwitter = () => {
  if (this.state.uTwitter == null){
    this.setState({ uTwitter: ""});
  } else{
    this.setState({ uTwitter: null});
  }
}
toggleFacebook = () => {
  if (this.state.uFacebook == null){
    this.setState({ uFacebook: ""});
  } else{
    this.setState({ uFacebook: null});
  }
}
toggleInstagram = () => {
  if (this.state.uInstagram == null){
    this.setState({ uInstagram: ""});
  } else{
    this.setState({ uInstagram: null});
  }
}
toggleLinkedin = () => {
  if (this.state.uLinkedin == null){
    this.setState({ uLinkedin: ""});
  } else{
    this.setState({ uLinkedin: null});
  }
}

handleSubmit = (e) => {
  console.log("submit",e, this.state.username)
  e.preventDefault();
  const form = e.currentTarget
  this.props.history.push({
    pathname: `/tools/finder/${this.state.username}`,
    //search: '?query=abc',
    state: { username: this.state.username,
    uTwitter: this.state.uTwitter,
    uFacebook: this.state.uFacebook,
    uInstagram: this.state.uInstagram,
    uLinkedin: this.state.uLinkedin,
    exception: true }
  });

};

 render(){
  return (
    <CContainer>
      <CCard  style={{padding: "2rem"}}>
        <CCardBody>
          <CRow style={{marginBottom: "0.8rem"}}>
              <h2 id="search" className="card-title mb-0">OSINT Lab Search Engine</h2>
           </CRow>
            <CRow>

          <CCard style={{width: "43rem"}}>
          <CForm className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>

            <CCardBody>
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup className="has-validation">
                    <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="validationCustomUsername" name="input1-group3" 
                        placeholder="Name or username" required
                        value={this.state.username}
                        onChange={this.onChangeUsername}  />
                      <CInvalidFeedback invalid>Please choose a name or username.</CInvalidFeedback>

                      <CDropdown className="input-group-append">
                          <CDropdownToggle caret color="primary">
                            {this.state.selectedCategory}
                          </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={()=>this.selectCategory("Person ID")}>Person ID</CDropdownItem>
                          <CDropdownItem onClick={()=>this.selectCategory("KeyWord")}>KeyWord</CDropdownItem>

                        </CDropdownMenu>
                      </CDropdown>

                    </CInputGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
{/*                   <CCol md="12">
                  <CInputGroup>
                      <CInputGroupAppend>
                        <CInputGroupText>
                          <CIcon name="cil-location-pin" />
                        </CInputGroupText>
                      </CInputGroupAppend>
                      <CInput id="input1-group1" name="input1-group1" placeholder="Location" />
                    </CInputGroup>
                  </CCol> */}
                </CFormGroup>
              
              {!this.state.showAdvanced ?  <CButton color={"info"} onClick={() => this.toggleAdvancedSearch(true)}>Advanced search</CButton>
              : <CButton color={"info"} onClick={() => this.toggleAdvancedSearch(false)}>Hide advanced search</CButton>
               }
             

              {this.state.showAdvanced ? 
                      <CCard style={{width: "100%", marginTop: "1rem"}} >
                        <CCardHeader>
                          Search
                          <small> Form</small>
                        </CCardHeader>
                        <CCardBody>

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
                        onChange={this.toggleTwitter}
                        defaultChecked={true}
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Twitter</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" defaultChecked={true} onChange={this.toggleFacebook}/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Facebook</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" defaultChecked={true} onChange={this.toggleInstagram}/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Instagram</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" defaultChecked={true} onChange={this.toggleLinkedin} />
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
                            <CInput  disabled={this.state.uTwitter == null}
                                  label="Name"
                                  placeholder="Enter Twitter username"
                                  value={this.state.uTwitter}
                                  onChange={this.onChangeuTwitter}
                                />
                          </CInputGroup>
                          
                          <CInputGroup   style={{paddingRight: "50%", paddingTop: "1rem"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>Facebook</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={this.state.uFacebook == null}
                                  label="Name"
                                  placeholder="Enter facebook username"
                                  value={this.state.uFacebook}
                                  onChange={this.onChangeuFacebook}
                                />
                          </CInputGroup>

                        </CFormGroup>

                        <CInputGroup   style={{paddingRight: "50%"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>Instagram</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={this.state.uInstagram == null}
                                  label="Name"
                                  placeholder="Enter Instagram username"
                                  value={this.state.uInstagram}
                                  onChange={this.onChangeuInstagram}
                                />
                          </CInputGroup>

                          <CInputGroup   style={{paddingRight: "50%", paddingTop: "1rem"}}>
                            <CInputGroupPrepend>
                              <CInputGroupText>LinkedIn</CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput  disabled={this.state.uLinkedin == null}
                                  label="Name"
                                  placeholder="Enter LinkedIn username"
                                  value={this.state.uLinkedin}
                                  onChange={this.onChangeuLinkedin}
                                />
                          </CInputGroup>

                        </CCardBody>
                      </CCard>  : []
                      }
            </CCardBody>

            
            <CCardFooter>
              <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
            </CForm>

          </CCard>
          </CRow>
        </CCardBody>
        <CCardFooter>
          
        </CCardFooter>
      </CCard>



      <CRow >
      <CCol xs="12" md="6">

      <CCard style={{ marginTop: "1rem"}} >
        <CCardHeader>
          <h3>
          Get Comprehensive reports and insights

          </h3>
        </CCardHeader>

        <CCardBody>
            <p>Analysta informative reports include the following data when available:</p>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => this.setAccordion(this.state.accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={this.state.accordion === 0}>
                  <CCardBody>
                    1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => this.setAccordion(this.state.accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={this.state.accordion === 1}>
                  <CCardBody>
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => this.setAccordion(this.state.accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={this.state.accordion === 2}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
        </CCardBody>
      </CCard> 
      </CCol>
      <CCol xs="12" md="6">

      <CCard style={{ marginTop: "1rem"}} >
        <CCardHeader>
          <h3>
          Stay Updated

          </h3>
        </CCardHeader>

        <CCardBody>

        <p>
        Get updates on the reports you purchase for the lifetime of your Spokeo account; even if you don’t find all the results you were looking for at first, just wait — as our data refreshes, so too can your report!
        </p>
        </CCardBody>
      </CCard> 
      </CCol>

      </CRow>

      <CRow >

      <CCard style={{width: "40rem", marginTop: "1rem"}} >
        <CCardHeader>
          <h3>
          120+ Social media platforms

          </h3>
        </CCardHeader>

        <CCardBody>

        <p>
              <CButton  className="btn-facebook btn-brand mr-1 mb-1"><CIcon  name="cib-facebook" /><span className="mfs-2">Facebook</span></CButton>
              <CButton  className="btn-twitter btn-brand mr-1 mb-1"><CIcon  name="cib-twitter" /><span className="mfs-2">Twitter</span></CButton>
              <CButton  className="btn-linkedin btn-brand mr-1 mb-1"><CIcon  name="cib-linkedin" /><span className="mfs-2">LinkedIn</span></CButton>
              <CButton  className="btn-flickr btn-brand mr-1 mb-1"><CIcon  name="cib-flickr" /><span className="mfs-2">Flickr</span></CButton>
              <CButton  className="btn-tumblr btn-brand mr-1 mb-1"><CIcon  name="cib-tumblr" /><span className="mfs-2">Tumblr</span></CButton>
              <CButton  className="btn-xing btn-brand mr-1 mb-1"><CIcon  name="cib-xing" /><span className="mfs-2">Xing</span></CButton>
              <CButton  className="btn-github btn-brand mr-1 mb-1"><CIcon  name="cib-github" /><span className="mfs-2">Github</span></CButton>
              <CButton  className="btn-stack-overflow btn-brand mr-1 mb-1"><CIcon  name="cib-stackoverflow" /><span className="mfs-2">StackOverflow</span></CButton>
              <CButton  className="btn-youtube btn-brand mr-1 mb-1"><CIcon  name="cib-youtube" /><span className="mfs-2">YouTube</span></CButton>
              <CButton  className="btn-dribbble btn-brand mr-1 mb-1"><CIcon  name="cib-dribbble" /><span className="mfs-2">Dribbble</span></CButton>
              <CButton  className="btn-instagram btn-brand mr-1 mb-1"><CIcon  name="cib-instagram" /><span className="mfs-2">Instagram</span></CButton>
              <CButton  className="btn-pinterest btn-brand mr-1 mb-1"><CIcon  name="cib-pinterest" /><span className="mfs-2">Pinterest</span></CButton>
              <CButton  className="btn-vk btn-brand mr-1 mb-1"><CIcon  name="cib-vk" /><span className="mfs-2">VK</span></CButton>
              <CButton  className="btn-yahoo btn-brand mr-1 mb-1"><CIcon  name="cib-yahoo" /><span className="mfs-2">Yahoo</span></CButton>
              <CButton  className="btn-behance btn-brand mr-1 mb-1"><CIcon  name="cib-behance" /><span className="mfs-2">Behance</span></CButton>
              <CButton  className="btn-reddit btn-brand mr-1 mb-1"><CIcon  name="cib-reddit" /><span className="mfs-2">Reddit</span></CButton>
              <CButton  className="btn-vimeo btn-brand mr-1 mb-1"><CIcon  name="cib-vimeo" /><span className="mfs-2">Vimeo</span></CButton>
            </p>
        </CCardBody>
      </CCard> 
    </CRow>

</CContainer>
  )
}
}

