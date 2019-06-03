import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';



// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log(`regularClassInstance: `, regularClassInstance);
// console.log(`componentClassInstance: `, componentClassInstance);


class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     displayBio: false
  //   };
    
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //}
  
  state = {displayBio: false};
  //replace ReadMore() and showLess()
  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio});
  }

  // readMore() {
  //   // console.log('read more this: ', this);
  //   this.setState({displayBio: true});
  // }
  // ShowLess() {
  //   // console.log('read more this: ', this);
  //   this.setState({displayBio: false});
  // }

 
  render () {  
    return (
      <div>
        <img src={profile} alt='profile' className="profile"/>
        <h1>Hello !!!</h1>
        <p>Welcome to Anna's page.</p>
        {this.state.displayBio === true ? 
          (
          <div className="App">
            <p>I am a software engineer and always looking forward to working on meaningful project. </p>
            <p>I have found my interest in web development.</p>
            <p>This page is my work space as I'm learning Javascript and picking up React/Redux.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>)
          : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          ) 
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
      
    );
  }
}

export default App;