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
      placeholder="In this text field you can describe your duties at the job. Outline the problems you solved for your employer. "
    />{" "}
  </li>
);

const Work = () => {
  
  const [workList, addRemoveWork] = useState([bulletPoint])

  const addWorkBullet = () =>{
    addRemoveWork(workList.concat(bulletPoint))
  } 

  const removeWork = () =>{
    addRemoveWork(workList.slice(0,-1))
  } 

    return (
      <div className="BoxPlacement">
        <div className="btnPosition">
          <button className="workBtn" onClick={addWorkBullet}>
            +
          </button>
          <button className = "BtnRemove" onClick = {removeWork}>-</button>
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
          <BulletPoints addWork={workList} />
        </div>

      </div>
    );
}

export default Work;
