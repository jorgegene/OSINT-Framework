import React, { useState, useEffect, lazy } from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink,
  CImg,
  CProgress,
  CButton,
  CCallout,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CListGroupItem,
  CListGroup,
  CContainer
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { NavLink } from 'react-router-dom'

import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_tweets_user } from "../../actions/tweets";

const Cards = (props) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)
  const {name} = useParams()
  const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  
  const { message } = useSelector(state => state.message_reducer);
  const dispatch = useDispatch();
  const [tweets, setTweets] = useState('')
  const [isLoading, setIsLoading] = useState(false);


  const state = useSelector((state) => state);
  //console.log("vie", props, props.match.params.name)


  let username = props.match.params.name


  useEffect(async() => {
    console.log("Searching tweets", username)
    setIsLoading(true);
      dispatch(get_tweets_user(username))
      .then(() => {
        setIsLoading(false);

      })
      .catch((err) => {
        console.log("error",err)
      });


    
  }, []);

  let tweets_component = () => {
    if (isLoading || state.tweet_reducer.tweets === null){
      return <p>Loading...</p>
    } else{
      return (
      <CListGroup>
        {
          state.tweet_reducer.tweets.map((tweet, index) => {
            return (
            <a href={tweet.link} style={{ textDecoration: 'none' }} target="_blank" >
              <CListGroupItem action key={index}>
              <h5 className="d-flex w-100 justify-content-between">
               {tweet.username}
              <small>{tweet.datetime}</small>
              </h5>
              <div className="mb-1">
                {`${tweet.tweet_data}`}                 
              </div>
              </CListGroupItem>
            </a>)
          })
        }
      </CListGroup>
      )
  }
}


  return (
    <CContainer fluid xxl>
    
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
                      <div class="container">
            <div class="row">
              <div class="col-lg">
              <CImg
                   height="200rem"
                  shape="rounded-circle"
                  src="https://ttensports.com/wp-content/uploads/1982/02/person-placeholder-245x300.jpg"
                    fluid
                    className="mb-2"
                  />
              </div>
              <div class="col-md">
              {username}
              </div>

            </div>
          </div>

          </CCardHeader>

            <CCardBody>
            {`${lorem}`}                 

            </CCardBody>
          </CCard>


        </CCol>
        
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
            Stats

      </CCardHeader>

            <CCardBody>
            {`${lorem}`}                 

            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      <CRow>
      <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
            Recent Games
      </CCardHeader>
            <CCardBody>
            {`${lorem}`}                 

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow >
      <WidgetsBrand style={{width:"60rem"}} withCharts/>

      </CRow>

      <CRow >

      <CCard style={{width:"80rem"}}>
          <CCardHeader>
            Index indentifiers
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    Twitter
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Facebook
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Instagram
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    LinkedIn
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Other
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                <CCard>
            <CCardHeader>
              List user tweets
            </CCardHeader>
            <CCardBody>
            
               { tweets_component()}


            </CCardBody>
          </CCard>

                </CTabPane>
                <CTabPane>
                  {`2. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {`3. ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>



      </CRow>



      </CContainer>
  )
}

export default Cards
