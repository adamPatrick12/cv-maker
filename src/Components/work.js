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
      placeholder="In this text field you can describe your duties at the job. Outline the problems you solved for your employer. "
    />{" "}
  </li>
);

class Work extends Component {
  constructor() {
    super();

    this.state = {
      bullet: [bulletPoint],
      workList: [],
    };

    this.addWorkBullet = this.addWorkBullet.bind(this);
    this.removeWork = this.removeWork.bind(this)
  }

  addWorkBullet() {
    this.setState({
      workList: this.state.workList.concat(this.state.bullet),
    });
  }

  removeWork(){
    this.setState({
        workList: this.state.workList.slice(0,-1)
    });
  }

  render() {
    return (
      <div className="BoxPlacement">
        <div className="btnPosition">
          <button className="workBtn" onClick={this.addWorkBullet}>
            +
          </button>
          <button className = "BtnRemove" onClick = {this.removeWork}>-</button>
        </div>
        <div className="workBox">
        <div className="btnPosition">
        </div>
          <div className="employerBox">
            <input
              className="workTitle"
              id="nameBox"
              type="text"
              placeholder="EMPLOYER"
            />
            <input
              className="Date"
              id="nameBox"
              type="text"
              placeholder="Jan 20xx - Jan 20xx"
            />
          </div>
          <input
            className="workPosition"
            id="nameBox"
            type="text"
            placeholder="POSITION"
          />
          <BulletPoints addWork={this.state.workList} />
        </div>

      </div>
    );
  }
}

export default Work;
