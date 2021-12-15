import './App.css';
import React, { Component } from "react";
import Name from "./Components/name"
import Skills from "./Components/skills"
import Work from "./Components/work"
import Title from "./Components/titleAndHR"
import Projects from './Components/projects';

const workElement = <Work/>


class App extends Component {
  constructor(){
    super()

    this.state = {
      workDiv: [workElement],
      workArr: [],
    };

    this.addWorkDiv = this.addWorkDiv.bind(this);
  }

  addWorkDiv() {
    this.setState({
      workArr: this.state.workArr.concat(this.state.workDiv), 
    });
  }
  
  render(){
    return (
      <div className="App">
        <div className="App-bg">
          <Name/>
          <Title title = "SKILLS" class = "skillsBox" />
          <Skills />
          <Title title = "WORK" class = "workDiv" />
          <Work workBtn = {<button className = "jobBtn" onClick = {this.addWorkDiv}>Add Job</button>}/>
          {this.state.workArr}
          <Title title = "PROJECTS" class = "workDiv" />
          <Projects/>
          <Title title = "EDUCATION" class = "workDiv" />
        </div>
      </div>
    );
  }
  }
  

export default App;
