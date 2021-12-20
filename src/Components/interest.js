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
        placeholder="Describe any relevent information here, scholarships, honours list, course work etc.(Keep this section short)"
      />{" "}
    </li>
  );

const Interests = () => {
   

  const [interestsLists, addRemoveBullet] = useState([bulletPoint])
     
  const addInterestsBullet = () => {
    addRemoveBullet(interestsLists.concat(bulletPoint))
  };

  const removeIntrests = () => {
    addRemoveBullet(interestsLists.slice(0,-1))
  };


      return (
        <div className="BoxPlacement">
          <div className="btnPosition">
            <button className="SchoolBtn" onClick={addInterestsBullet}>
                +
            </button> 
            <button className = "BtnRemove2" onClick = {removeIntrests}>-</button>
          </div>
          <div className="workBox">
              <BulletPoints addWork = {interestsLists}/>
          </div>
        </div>
      );
  }

  export default Interests;