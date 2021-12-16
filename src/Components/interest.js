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
        placeholder="Describe any relevent information here, scholarships, honours list, course work etc.(Keep this section short)"
      />{" "}
    </li>
  );

class Interests extends Component {
   
    constructor(){
        super()
  
        this.state = {
          bullet: [bulletPoint],
          interestLists: [bulletPoint],
        };
    
        this.addIntrestssBullet = this.addIntrestssBullet.bind(this);
        this.removeIntrests = this.removeIntrests.bind(this);
    }

    removeIntrests(){
        this.setState({
            interestLists: this.state.interestLists.slice(0,-1)
        });
      }
  
    addIntrestssBullet() {
      this.setState({
        interestLists: this.state.interestLists.concat(this.state.bullet),
      });
    }
    
      render() {
      return (
        <div className="BoxPlacement">
          <div className="btnPosition">
            <button className="SchoolBtn" onClick={this.addIntrestssBullet}>
                +
            </button> 
            <button className = "BtnRemove2" onClick = {this.removeIntrests}>-</button>
          </div>
          <div className="workBox">
              <BulletPoints addWork = {this.state.interestLists}/>
          </div>
        </div>
      );
    }
  }

  export default Interests;