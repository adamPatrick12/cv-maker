import React, { useState } from "react";
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

const Education = () => {
   
  const [educationList, removeAddEducation] = useState([bulletPoint])
  
    
  const addSchoolBullet = () => {
    removeAddEducation(educationList.concat(bulletPoint))
  }
  
  const removeSchool = () => {
    removeAddEducation(educationList.slice(0,-1))
  }


  
      return (
        <div className="BoxPlacement">
          <div className="btnPosition">
            <button className="SchoolBtn" onClick={addSchoolBullet}>
                +
            </button> 
            <button className = "BtnRemove2" onClick = {removeSchool}>-</button>
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
              <BulletPoints addWork = {educationList}/>
          </div>
        </div>
      );
    
  }

  export default Education