import React, { Component } from "react";
import '../components.css';
import BulletPoints from "./workExtension";

const bulletPoint = (
    <li>
      {" "}
      <input
        className="workBullet"
        id="nameBox"
        type="text"
        placeholder="Describe any relevent information here, scholarships, honours list, course work etc."
      />{" "}
    </li>
  );

class Education extends Component {
   
    constructor(){
        super()
  
        this.state = {
          bullet: [bulletPoint],
          educationList: [bulletPoint],
        };
    
        this.addSchoolBullet = this.addSchoolBullet.bind(this);
        this.removeSchool = this.removeSchool.bind(this);
    }
  
    addSchoolBullet() {
      this.setState({
        educationList: this.state.educationList.concat(this.state.bullet),
      });
    }

    removeSchool(){
        this.setState({
            educationList: this.state.educationList.slice(0,-1)
        });
      }
    
      render() {
      return (
        <div className="BoxPlacement">
          <div className="btnPosition">
            <button className="SchoolBtn" onClick={this.addSchoolBullet}>
                +
            </button> 
            <button className = "BtnRemove2" onClick = {this.removeSchool}>-</button>
          </div>
          <div className="workBox">
            <div className="employerBox">
              <input
                className="workTitle"
                id="nameBox"
                type="text"
                placeholder="INSTITUTION NAME"
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
            placeholder="DEGREE"
          />
              <BulletPoints addWork = {this.state.educationList}/>
          </div>
        </div>
      );
    }
  }

  export default Education