import React, { useState } from "react";
import "../components.css";
import SkillsInfo from "./skillExtension";

const element = (
  <input
    className="subSkill"
    id="nameBox"
    type="text"
    placeholder="Add Skill"
  />
);

const Skills = () =>  {
 
  const [skills, addRemoveSkill] = useState([element])
  const [skills2, addRemoveSkill2] = useState([element])
  const [skills3, addRemoveSkill3] = useState([element])


    
const addSkill = () =>{
  addRemoveSkill(skills.concat(element))
}
  
const addSkill2 = () =>{
  addRemoveSkill2(skills2.concat(element))
}
const addSkill3 = () =>{
  addRemoveSkill3(skills3.concat(element))
}

const removeSkill = () =>{
  addRemoveSkill(skills.splice(0,-1))
}

const removeSkill2 = () =>{
  addRemoveSkill2(skills2.splice(0,-1))
}

const removeSkill3 = () =>{
  addRemoveSkill3(skills3.splice(0,-1))
}

    return (
      <div>
        <div className="btnPosition">
          <button className="BtnRemove3" onClick={removeSkill}>
            -
          </button>
          <button className="skillsBtn" onClick={addSkill}>
            +
          </button>
          <button className="skillsBtn2" onClick={addSkill2}>
            +
          </button>
          <button className="BtnRemove4" onClick={removeSkill2}>
            -
          </button>
          <button className="skillsBtn3" onClick={addSkill3}>
            +
          </button>
          <button className="BtnRemove5" onClick={removeSkill3}>
            -
          </button>
        </div>
        <SkillsInfo
          addSkillDom={skills}
          addSkillDom2={skills2}
          addSkillDom3={skills3}
        />
      </div>
    );
}

export default Skills;
