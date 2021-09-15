import React, { useState, useEffect, useCallback, lazy } from 'react';
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
import { get_insta_posts_user } from "../../actions/instagram";
import { get_facebook_profile_user } from "../../actions/facebook";
import { get_linkedin_profile_user } from "../../actions/linkedin";


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
  let profile_pic = "https://ttensports.com/wp-content/uploads/1982/02/person-placeholder-245x300.jpg"

  useEffect(async() => {
    console.log("Searching tweets", username)
      dispatch(get_tweets_user(username))
      dispatch(get_insta_posts_user(username))
      dispatch(get_facebook_profile_user(username))
      dispatch(get_linkedin_profile_user(username))

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
                <p>
                {`${tweet.tweet_data}`}   

                </p>
                {tweet.tweet_image !== undefined ?
                     <CImg
                     src={tweet.tweet_image}
                     width="300px"
                     shape="rounded"
                     thumbnail
                     className="mb-2"
                   /> :
                   []             
              }

   

              </div>
              </CListGroupItem>
            </a>)
          })
        }
      </CListGroup>
      )
    }
  }

  let instagram_component = () => {
    console.log(state)
    if (state.instagram_reducer.insta_posts === null){
      return <p>Loading...</p>
    } else{
      
      return (
      <CListGroup>
        {
          state.instagram_reducer.insta_posts.map((post, index) => {
            let date = new Date(post.datetime).toISOString().slice(0,10);
            return (
              <CContainer>
                  <CCol>
                    {post.post_image !== undefined ?
                        <CImg
                        src={post.post_image}
                        width="300px"
                        shape="rounded"
                        thumbnail
                        className="mb-2"
                      /> :
                      []             
                  }
                  </CCol>

                  <CCol>
                      <CRow>
                      <p style={{marginRight: "10px"}}>{post.username}</p>
                      <p>{date}</p>
                      
                      </CRow>
                      <CRow>
                        {post.post_data}
                      </CRow>

                  </CCol>
              </CContainer>
            )
          })
        }
      </CListGroup>
      )
    }
  }


  let facebook_component = () => {
    console.log(state)
    if ( state.facebook_reducer.profile === null){
      return <p>Loading...</p>
    } else{
      let p = state.facebook_reducer.profile

      if(p.profile_picture !== undefined){
        profile_pic = p.profile_picture
      }
      return (
      <CContainer>
       {p.profile_picture !== undefined ?
                     <CImg
                     src={p.profile_picture}
                     width="100px"
                     shape="rounded"
                     thumbnail
                     className="mb-2"
                   /> :
                   []             
      }
        <CRow>
          Name: {p.name}
        </CRow>
        <CRow>
          Username: {p.username}
        </CRow>
        <CRow>
        contact_info: {p.contact_info}
        </CRow>

        <CRow>
        Education: {p.education}
        </CRow>
        <CRow>
        Basic Info: {p.basic_info}
        </CRow>
        <CRow>
        Life Events: {p.life_events}
        </CRow>
      </CContainer>
      )
    }
  }

  let linkedin_component = () => {
    console.log(state)
    if ( state.linkedin_reducer.profile === null){
      return <p>Loading...</p>
    } else{
      let p = state.linkedin_reducer.profile

      return (
      <CContainer>
       {p.profile_picture !== undefined ?
                     <CImg
                     src={p.profile_picture}
                     width="100px"
                     shape="rounded"
                     thumbnail
                     className="mb-2"
                   /> :
                   []             
      }
        <CRow >
          Name: {p.name}
        </CRow>
        <CRow >
        About: {p.about}
        </CRow>
        <CRow >
        contact_info: {p.profile_link}
        </CRow>
        <CRow >
        Experiences: {p.experiences}
        </CRow>
        <CRow >
        Education: {p.educations}
        </CRow>
        <CRow >
        Accomplishments: {p.accomplishments}
        </CRow>
        <CRow >
        Interests: {p.interests}
        </CRow>
        <CRow >
        Contacts: {p.contacts}
        </CRow>
      </CContainer>
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
                  src={profile_pic}
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
                  <CNavLink >
                    Facebook
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink >
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

                <CCard>
                    <CCardHeader>
                      Profile
                    </CCardHeader>
                    <CCardBody>
                    
                    { facebook_component()}


                    </CCardBody>
                  </CCard>

                </CTabPane>
                <CTabPane>
                  { instagram_component()}
                </CTabPane>
                <CTabPane>
                { linkedin_component()}
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
