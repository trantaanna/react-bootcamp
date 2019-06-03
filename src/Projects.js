import React, { Component } from 'react';
import PROJECTS from './data/projects'

class Project extends Component{
  render () {
    console.log('this.props: ', this.props);
    const {title, description, link, image } = this.props.project;

    return(
      <div style={{display: 'inline-block', width: 250, margin: 10, verticalAlign: "top"}}>
        <h4>{title}</h4>
        <img src={image} alt='profile' style={{width: 200, height: 120 }} />
        <p>{description}</p>
        <a href={link}>{link}</a>      
      </div>
    ) 
  }
}


class Projects extends Component {
  render () {
    return (
      <div>
        <h3>Highlited Projects</h3>
          <div>
            {
              PROJECTS.map( PROJECT => {
                return (
                  //<div key={proj.id}> {proj.title}</div>
                  <Project key={PROJECT.id} project={PROJECT} />
                  )
                } )
            }
          </div>
      </div>
    )
  }
}

export default Projects;