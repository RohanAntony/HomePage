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
      overlayImg: "img/calendar1.png"
    }
  }

  render(){
    return (
      <div className="App">
        { this.state.showOverlay ? <Overlay img={this.state.overlayImg}/> : null}
        <Nav />
        <Section
          projects={this.state.projects}
          certifications={this.state.certifications}
          experience={this.state.experience}
          education={this.state.education}/>
      </div>
    );
  }
}

export default App;
