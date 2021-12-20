import './App.css';
import React, { useState } from "react";
import Name from "./Components/name"
import Skills from "./Components/skills"
import Work from "./Components/work"
import Title from "./Components/titleAndHR"
import Projects from './Components/projects';
import Education from './Components/education';
import Interests from './Components/interest';


const workElement = <Work/>
const projectElement = <Projects/>


const App = () =>  {
  


    const [workArr, addWork] = useState([])
    const [projectArr, addProject] = useState([])

  const addJobDiv = () => {
    addWork(workArr.concat(workElement))
  }

  const addProjectDiv = () => {
    addProject(workArr.concat(projectElement))
  }


    return (
      <div className="App">
        <button className = "jobBtn" onClick = {addJobDiv}>Add Job</button>
        <button className = "AddprojectBtn" onClick = {addProjectDiv}>Add Project</button>
        <div className="App-bg">
          <Name/>
          <Title title = "SKILLS" class = "skillsBox" />
          <Skills />
          <Title title = "WORK" class = "workDiv" />
          <Work />
          {workArr}
          <Title title = "PROJECTS" class = "workDiv" />
          <Projects/>
          {projectArr}
          <Title title = "EDUCATION" class = "workDiv" />
          <Education/>
          <Title title = "INTERESTS" class = "workDiv" />
          <Interests/>
        </div>
      </div>
    );
  }
  

export default App;
