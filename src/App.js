import './App.css';
import React, { Component } from "react";
import Name from "./Components/name"
import Skills from "./Components/skills"
import Work from "./Components/work"
import Title from "./Components/titleAndHR"
import Projects from './Components/projects';
import Education from './Components/education';
import Interests from './Components/interest';


const workElement = <Work/>
const projectElement = <Projects/>


class App extends Component {
  constructor(){
    super()

    this.state = {
      workDiv: [workElement],
      workArr: [],
      projectDiv: [projectElement],
      projectArr: []
    };

    this.addWorkDiv = this.addWorkDiv.bind(this);
    this.addProjectDiv = this.addProjectDiv.bind(this);

  }

  addWorkDiv() {
    this.setState({
      workArr: this.state.workArr.concat(this.state.workDiv), 
    });
  }
  
  addProjectDiv (){
    this.setState({
      projectArr: this.state.projectArr.concat(this.state.projectDiv), 
    });
  }

  render(){
    return (
      <div className="App">
        <button className = "jobBtn" onClick = {this.addWorkDiv}>Add Job</button>
        <button className = "AddprojectBtn" onClick = {this.addProjectDiv}>Add Project</button>
        <div className="App-bg">
          <Name/>
          <Title title = "SKILLS" class = "skillsBox" />
          <Skills />
          <Title title = "WORK" class = "workDiv" />
          <Work />
          {this.state.workArr}
          <Title title = "PROJECTS" class = "workDiv" />
          <Projects/>
          {this.state.projectArr}
          <Title title = "EDUCATION" class = "workDiv" />
          <Education/>
          <Title title = "INTERESTS" class = "workDiv" />
          <Interests/>
        </div>
      </div>
    );
  }
  }
  

export default App;
