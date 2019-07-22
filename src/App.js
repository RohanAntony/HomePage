import React, { Component } from 'react';

import Nav from './components/Navbar/nav';
import Section from './components/Section/section';
import Overlay from './components/Objects/overlay';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      projects: true,
      certifications: true,
      experience: false,
      education: false,
      showOverlay: false,
      overlayImage: "img/calendar1.png"
    }
  }

  toggleOverlay = (img) => {
    this.setState(prevState => {
      if(!prevState.showOverlay)
        return {
          showOverlay: true,
          overlayImage: img
        }
      else
        return {
          showOverlay: false,
          overlayImage: ""
        }
    })
  }

  toggleDisplay = (field) => {
    this.setState(prevState => {
      if(!prevState[field])
        return prevState[field] = true;
      else
        return prevState[field] = false;
    })
    console.log(field)
  }

  render(){
    return (
      <div className="App">
        {
          this.state.showOverlay ?
          <Overlay img={this.state.overlayImage} toggleOverlay={this.toggleOverlay}/> :
          null
        }
        <Nav />
        <Section
          projects={this.state.projects}
          certifications={this.state.certifications}
          experience={this.state.experience}
          education={this.state.education}
          toggleOverlay={this.toggleOverlay}
          toggleDisplay={this.toggleDisplay}/>
      </div>
    );
  }
}

export default App;
