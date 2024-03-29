import React, { useState, useEffect, useCallback, lazy } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CImg,
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


import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_tweets_user, get_twitter_profile } from "../../actions/tweets";
import { get_insta_posts_user, get_insta_profile } from "../../actions/instagram";
import { get_facebook_profile_user } from "../../actions/facebook";
import { get_linkedin_profile_user } from "../../actions/linkedin";

import { get_usernames, reset_search } from "../../actions/search";
import Search from "../../services/search.service";




const Cards = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [usernames, setUsernames] = useState(null);

  const state = useSelector((state) => state);
  

  const old_state = props.location.state
  let username = props.match.params.name
  let profile_pic_placeholder = "https://ttensports.com/wp-content/uploads/1982/02/person-placeholder-245x300.jpg"

  let uTwitter = null
  let uFacebook = null
  let uInstagram = null
  let uLinkedin = null

  if (old_state != undefined && old_state.exception != undefined){

    if (old_state.uTwitter != null){
      if (old_state.uTwitter.length > 0){
        uTwitter = old_state.uTwitter 
      } else{
        uTwitter = ""
      }
    } 
    if (old_state.uFacebook != null){
      if (old_state.uFacebook.length > 0){
        uFacebook = old_state.uFacebook 
      } else{
        uFacebook = ""
      }
    } 
    if (old_state.uInstagram != null){
      if (old_state.uInstagram.length > 0){
        uInstagram = old_state.uInstagram 
      } else{
        uInstagram = ""
      }
    } 
    if (old_state.uLinkedin != null){
      if (old_state.uLinkedin.length > 0){
        uLinkedin = old_state.uLinkedin 
      } else {
        uLinkedin = ""
      }
    } 
  } else{
    uTwitter = ""
    uFacebook = ""
    uInstagram = ""
    uLinkedin = ""
  }

  const SearchComponent = (props) => {
    const { usernames } = props;
    if ( usernames === null || usernames == undefined){
      return <p>Loading...</p>
    } else{
      const names = usernames
      console.log("SearchComponent", usernames)
  
      return (
        <CContainer>
  
         <CRow>
         <h5>Twitter: </h5><a href={names.twitter_url} style={{ textDecoration: 'none', marginRight: "1rem" }} target="_blank" >
            {names.twitter_username} </a>
         </CRow>
         <CRow>
           <h5>Facebook: </h5><a href={names.facebook_url} style={{ textDecoration: 'none', marginRight: "1rem" }} target="_blank" > 
            {names.facebook_username} </a>
         </CRow>
         <CRow>
         <h5>LinkedIn: </h5><a  href={names.linkedin_url} style={{ textDecoration: 'none', marginRight: "1rem" }} target="_blank" >
            {names.linkedin_username} </a>
         </CRow>
         <CRow>
         <h5>Instagram: </h5><a  href={names.insta_url} style={{ textDecoration: 'none', marginRight: "1rem" }} target="_blank" >
            {names.insta_username} </a>
         </CRow>
  
       </CContainer>
      )
    }
  }
  
  useEffect(() => {
    dispatch(reset_search())

    Search.get_usernames(username).then(function(res) {
      setUsernames(res.usernames)
      console.log("searchset", res.usernames)

      if (uTwitter !== null ) {
        if (uTwitter.length == 0){
          uTwitter = res.usernames.twitter_username
        }
        dispatch(get_tweets_user(uTwitter))
        dispatch(get_twitter_profile(uTwitter))
      }
      if (uInstagram !== null ) {
        if (uInstagram.length == 0){
          uInstagram = res.usernames.insta_username
        }
        dispatch(get_insta_posts_user(uInstagram))
        dispatch(get_insta_profile(uInstagram))
  
      }
      if (uFacebook !== null ) {
        if (uFacebook.length == 0){
          uFacebook = res.usernames.facebook_username
        }
        dispatch(get_facebook_profile_user(uFacebook))
  
      }
      if (uLinkedin !== null ) {
        if (uLinkedin.length == 0){
          uLinkedin = res.usernames.linkedin_username
        }
        dispatch(get_linkedin_profile_user(uLinkedin))
  
      }
    })


  }, []);


  const profile_img = () => {
    let p = state.tweet_reducer.twitter_profile
    let p2 = state.instagram_reducer.insta_profile
    let p3 = state.facebook_reducer.profile

    if(p2 != null && p2.profile_image !== undefined){
      return (
        <CImg
        height="100rem" width="100rem" shape="rounded-circle"
       src={ p2.profile_image}
         fluid
         className="mb-2"
       />
      )
    }
    else if(p != null && p.profile_image !== undefined){
      return (
        <CImg
        height="100rem" width="100rem" shape="rounded-circle"
       src={ p.profile_image}
         fluid
         className="mb-2"
       />
      )
    }
    else if(p3 != null && p3.profile_picture !== undefined){
      return (
        <CImg
        height="100rem" width="100rem" shape="rounded-circle"
       src={ p3.profile_picture}
         fluid
         className="mb-2"
       />
      )
    } else{
      return (
        <CImg
        height="100rem" width="100rem" shape="rounded-circle"
       src={ profile_pic_placeholder}
         fluid
         className="mb-2"
       />
      )
    }
  }


  let twitter_profile_component = () => {
    if ( state.tweet_reducer.twitter_profile === null){
      return <p>Loading...</p>
    } else{
      let p = state.tweet_reducer.twitter_profile

      return (
      <CContainer style={{margin: "1rem"}}>

        <CRow>
          <CCol xs="6" sm="1" md="1">

       {p.profile_image !== undefined ?
                     <CImg
                     src={p.profile_image}
                     width="300px"
                     height="300px"
                     shape="rounded"
                     thumbnail
                     className="mb-2"
                   /> :
                   []             
      }
       </CCol>
      <CCol>
          <CRow>
            <h5>
            Username: {p.username}
            </h5>
          </CRow>
          <CRow>
            <h5>
            Follows: {p.followees}
            </h5>
          </CRow>
          <CRow>
            <h5>
            Followers: {p.followers}
            </h5>
          </CRow>
          </CCol>
          </CRow>
      </CContainer>
      )
    }
  }

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

              <CRow style={{marginLeft: "10%", marginRight: "10%", marginTop: "3%"}}>
                <CCol>
                    <p>RT {tweet.retweets}</p>
                </CCol>
                <CCol>
                <p>Likes {tweet.likes}</p>

                  </CCol>
                  <CCol>
                  <p>Replies {tweet.replies}</p>

                  </CCol>
              </CRow>

   

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
    if (state.instagram_reducer.insta_posts === null){
      return <p>Loading...</p>
    } else{
      
      return (
      <CListGroup>
        {
          state.instagram_reducer.insta_posts.map((post, index) => {
            let date = new Date(post.datetime).toISOString().slice(0,10);

            return (
              <CContainer style={{marginBottom: "5%"}}>
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
                      <p style={{marginRight: "10px"}}>{date}</p>
                      <p>likes {post.likes}</p>

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
  let insta_profile_component = () => {
    if ( state.instagram_reducer.insta_profile === null){
      return <p>Loading...</p>
    } else{
      let p = state.instagram_reducer.insta_profile


      return (
      <CContainer style={{margin: "1rem"}}>

        <CRow>
          <CCol xs="6" sm="1" md="1">

       {p.profile_image !== undefined ?
                     <CImg
                     src={p.profile_image}
                     width="300px"
                     height="300px"
                     shape="rounded"
                     thumbnail
                     className="mb-2"
                   /> :
                   []             
      }
       </CCol>
      <CCol>
          <CRow>
            <h5>
            Username: {p.username}
            </h5>
          </CRow>
          <CRow>
            <h5>
            Follows: {p.followees}
            </h5>
          </CRow>
          <CRow>
            <h5>
            Followers: {p.followers}
            </h5>
          </CRow>

          <CRow>
            <h5>
            Bio: {p.biography}
            </h5>
          </CRow>

          </CCol>
          </CRow>
      </CContainer>
      )
    }
  }
  let facebook_component = () => {
    if ( state.facebook_reducer.profile === null){
      return <p>Loading...</p>
    } else{
      let p = state.facebook_reducer.profile


      return (

      <CContainer style={{margin: "3%"}}>
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
      <CContainer style={{margin: "3%"}}>
        <CRow>
          <h5>Name: {p.name}</h5>
        </CRow>
        <CRow>
          <h5>Username: {p.username}</h5>
          
        </CRow>

        <CRow>
          <h5>contact_info: {p.contact_info}</h5>
        </CRow>
      { p.education !== undefined ?  
        <CRow>
          <h5>Education: {p.education}</h5>
        
        </CRow> : []  }

        { p.basic_info !== undefined ?  
        <CRow>
          <h5>Basic Info: {p.basic_info}</h5>
        </CRow> : [] }

        { p.life_events !== undefined ?  
        <CRow>
          <h5>Life Events: {p.life_events}</h5>
        
        </CRow> : [] }

        </CContainer>
      </CContainer>
      )
    }
  }



  let linkedin_component = () => {
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
          <h5>Name: </h5>{p.name}
        </CRow>
        { p.about !== undefined ?  
        <CRow >
          <h5>About:</h5> {p.about} 
        </CRow>  : []  }

        <CRow >
        <h5>contact_info:</h5>{p.profile_link}
        </CRow>
        <CRow >
        <h5>Experiences: </h5>{p.experiences}
        </CRow>
        <CRow >
        <h5>Education: </h5>{p.educations}
        </CRow>

        { p.accomplishments !== undefined ? 
        <CRow >
        <h5>Accomplishments:</h5> {p.accomplishments}
        </CRow> : [] }
        { p.interests !== undefined ?  
        <CRow >
        <h5>Interests: </h5>{p.interests}
        </CRow> : []}

        { p.contacts !== undefined ?  
        <CRow >
        <h5>Contacts: </h5>{p.contacts}
        </CRow> : []}

      </CContainer>
      )
    }
  }

  return (
    <CContainer fluid xxl>
    
      <CRow>
        <CCol xs="12" sm="6" md="5">
          <CCard>
            <CCardHeader>
              <CContainer>

              <CRow>

              <CCol  xs="3" sm="4" md="4">
                { profile_img() }

                </CCol >

                <CCol  xs="9" sm="9" md="9">
                <h1>{username}</h1>

                </CCol> 

              </CRow>
              </CContainer>




          </CCardHeader>

            <CCardBody>
{/*               <p>Bio</p>
 */}                            

            </CCardBody>
          </CCard>


        </CCol>
        
        <CCol xs="12" sm="6" md="5">
          <CCard>
            <CCardHeader>
              <h3>
              Social Media Accounts
              </h3>
           

      </CCardHeader>

            <CCardBody>
              <SearchComponent usernames={usernames}/>
                            

            </CCardBody>
          </CCard>
        </CCol>

      </CRow>




      <CRow >

      <CCard style={{width:"80rem"}}>
          <CCardHeader>
            <h3>Social Media Activity</h3>
            
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                { uTwitter != null ? <CNavItem>
                  <CNavLink>
                    Twitter
                  </CNavLink>
                </CNavItem> : []}
                { uFacebook != null ?
                <CNavItem>
                <CNavLink >
                  Facebook
                </CNavLink>
              </CNavItem>
              : []
                }

                { uInstagram != null ? 
                  <CNavItem>
                  <CNavLink >
                    Instagram
                  </CNavLink>
                </CNavItem> : []}

                { uLinkedin != null ? 
                  <CNavItem>
                  <CNavLink>
                    LinkedIn
                  </CNavLink>
                </CNavItem> : []}



              </CNav>
              <CTabContent>
                { uTwitter != null ? 
                  <CTabPane>
                  <CCard>
                      <CCardHeader>
                        { twitter_profile_component() }
                      </CCardHeader>
                      <CCardBody>
                      
                        { tweets_component()}
  
  
                      </CCardBody>
                    </CCard>
  
                  </CTabPane> : []
              }

              { uFacebook != null ?
                <CTabPane>

                <CCard>

                    <CCardBody>
                    
                    { facebook_component()}


                    </CCardBody>
                  </CCard>

                </CTabPane> : []     
              
              }

              { uInstagram != null ?
                <CTabPane>

                <CCard>
                <CCardHeader>

                      {insta_profile_component()}
                    </CCardHeader>
                    <CCardBody>
                    
                    { instagram_component()}


                    </CCardBody>
                  </CCard>


                </CTabPane>  :[]
              }
              { uLinkedin != null ? 
                <CTabPane>


                <CCard>

                    <CCardBody>
                    
                    { linkedin_component()}


                    </CCardBody>
                  </CCard>

                </CTabPane> : []
              }


              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>



      </CRow>



      </CContainer>
  )
}

export default Cards
