import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';



class SocialProfile extends Component {
  render() {
    
    const {image, link} = this.props.socialProfile;
    return (
      <span>
        <a href={link}>
            <img src={image} alt="socialprofile" style={{width: 30, height: 30, margin:5}} />
          </a>
      </span> 
    )
  }
  
}


class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h3>Connect with me!</h3>
        <div>{
            SOCIAL_PROFILES.map( SP => {
                return (                  
                  //<div key={SP.id}>{SP.link}</div>
                  <SocialProfile key={SP.id} socialProfile={SP}/>
                );})
          }
        </div>
      </div>
    )
  }
}

export default SocialProfiles;