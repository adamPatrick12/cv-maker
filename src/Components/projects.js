import React, { Component } from "react";
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

class Projects extends Component {
  constructor(){
      super()

      this.state = {
        bullet: [bulletPoint],
        projectList: [bulletPoint],
      };
  
      this.addProjectBullet = this.addProjectBullet.bind(this);
      this.removeProject = this.removeProject.bind(this)
  }

  addProjectBullet() {
    this.setState({
        projectList: this.state.projectList.concat(this.state.bullet),
    });
  }
  
  removeProject(){
    this.setState({
      projectList: this.state.projectList.slice(0,-1)
    });
  }

    render() {
    return (
      <div className="BoxPlacement">
        <div className="btnPosition">
          <button className="projectBtn" onClick={this.addProjectBullet}>
            +
          </button>
          <button className = "BtnRemove2" onClick = {this.removeProject}>-</button>
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
          <BulletPoints addWork = {this.state.projectList} />
        </div>
      </div>
    );
  }
}

export default Projects;
