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
  CInputGroupAppend,
  CLabel,
  CCollapse
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       showAdvanced: false,
       selectedCategory: "Person ID",
       accordion: 1
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

 render(){
  return (
    <CContainer>
      <CCard  style={{padding: "2rem"}}>
        <CCardBody>
          <CRow style={{marginBottom: "0.8rem"}}>
              <h2 id="search" className="card-title mb-0">Analysta Search Engine</h2>
           </CRow>
            <CRow>

          <CCard style={{width: "43rem"}}>

            <CCardBody>
              <CForm className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                    <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="input1-group3" name="input1-group3" placeholder="Username" />

                      <CDropdown className="input-group-append">
                          <CDropdownToggle caret color="primary">
                            {this.state.selectedCategory}
                          </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={()=>this.selectCategory("Person ID")}>Person ID</CDropdownItem>
                          <CDropdownItem onClick={()=>this.selectCategory("KeyWord")}>KeyWord</CDropdownItem>
                          <CDropdownItem onClick={()=>this.selectCategory("All")}>All</CDropdownItem>

                        </CDropdownMenu>
                      </CDropdown>

                    </CInputGroup>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="12">
                  <CInputGroup>
                      <CInputGroupAppend>
                        <CInputGroupText>
                          <CIcon name="cil-location-pin" />
                        </CInputGroupText>
                      </CInputGroupAppend>
                      <CInput id="input1-group1" name="input1-group1" placeholder="Location" />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
              {!this.state.showAdvanced ?  <CButton onClick={() => this.toggleAdvancedSearch(true)}>Advanced search</CButton>
              : <CButton onClick={() => this.toggleAdvancedSearch(false)}>Hide advanced search</CButton>
               }
             

              {this.state.showAdvanced ? 
                      <CCard style={{width: "40rem", marginTop: "1rem"}} >
                        <CCardHeader>
                          Company
                          <small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                          <CFormGroup>
                            <CLabel htmlFor="company">Company</CLabel>
                            <CInput id="company" placeholder="Enter your company name" />
                          </CFormGroup>
                          <CFormGroup>
                            <CLabel htmlFor="vat">VAT</CLabel>
                            <CInput id="vat" placeholder="DE1234567890" />
                          </CFormGroup>
                          <CFormGroup>
                            <CLabel htmlFor="street">Street</CLabel>
                            <CInput id="street" placeholder="Enter street name" />
                          </CFormGroup>
                          <CFormGroup row className="my-0">
                            <CCol xs="8">
                              <CFormGroup>
                                <CLabel htmlFor="city">City</CLabel>
                                <CInput id="city" placeholder="Enter your city" />
                              </CFormGroup>
                            </CCol>
                            <CCol xs="4">
                              <CFormGroup>
                                <CLabel htmlFor="postal-code">Postal Code</CLabel>
                                <CInput id="postal-code" placeholder="Postal Code" />
                              </CFormGroup>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                          <CFormGroup>
                            <CLabel htmlFor="country">Country</CLabel>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCardBody>
                      </CCard>  : []}
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
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

