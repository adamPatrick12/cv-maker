import './App.css';
import React, { Component } from "react";
import Name from "./Components/name"
import Skills from "./Components/skills"
import Work from "./Components/work"
import Title from "./Components/titleAndHR"


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <div className="App-bg">
          <Name/>
          <Title title = "SKILLS" class = "skillsBox" />
          <Skills title = "SKILLS" />
          <Title title = "WORK" class = "workDiv" />
          <Work/>
        </div>
      </div>
    );
  }
  }
  

export default App;
