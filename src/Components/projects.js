import React, { useState } from "react";
import "../components.css";
import BulletPoints from "./workExtension";

const bulletPoint = (
    <li>
      {" "}
      <input
        className="workBullet"
        id="nameBox"
        type="text"
        placeholder="In this text field you can describe your project and the tools you used to create it."
      />{" "}
    </li>
  );

const Projects = () => {
  
  const [projectList, changeProjectList] = useState([bulletPoint])
    
  const addProjectBullet = () =>{
    changeProjectList(projectList.concat(bulletPoint))
  }

  const removeProject = () =>{
    changeProjectList(projectList.splice(0,-1))
  }

    return (
      <div className="BoxPlacement">
        <div className="btnPosition">
          <button className="projectBtn" onClick={addProjectBullet}>
            +
          </button>
          <button className = "BtnRemove2" onClick = {removeProject}>-</button>
        </div>
        <div className="workBox">
          <div className="employerBox">
            <input
              className="workTitle"
              id="nameBox"
              type="text"
              placeholder="PROJECT NAME"
            />
            <input
              className="Date"
              id="nameBox"
              type="text"
              placeholder="Jan 20xx - Jan 20xx"
            />
          </div>
          <BulletPoints addWork = {projectList} />
        </div>
      </div>
    );
}

export default Projects;
