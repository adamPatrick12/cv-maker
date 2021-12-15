import React, { Component } from "react";
import '../components.css';
import SkillsInfo from "./skillExtension";


const element = <input className = "subSkill" id = "nameBox" type="text" placeholder = "Add Skill" />

class Skills extends Component{
    
    constructor(){
        super()
    
         this.state = {
      skill: [element],
      skills: [],
      skills2: [],
      skills3: []
    };

    this.addSkill = this.addSkill.bind(this);
    this.addSkill2 = this.addSkill2.bind(this);
    this.addSkill3 = this.addSkill3.bind(this);
  }

  addSkill() {
    this.setState({
        skills: this.state.skills.concat(this.state.skill), 
    });
  }

  addSkill2() {
    this.setState({
        skills2: this.state.skills2.concat(this.state.skill), 
    });
  }

  addSkill3() {
    this.setState({
        skills3: this.state.skills3.concat(this.state.skill), 
    });
  }

    

      
    render(){
        return(
            <div>   
            <button className = "skillsBtn"onClick = {this.addSkill}>+</button>
            <button className = "skillsBtn2"onClick = {this.addSkill2}>+</button> 
            <button className = "skillsBtn3"onClick = {this.addSkill3}>+</button>   
            <SkillsInfo addSkillDom =  {this.state.skills} addSkillDom2 = {this.state.skills2} addSkillDom3 = {this.state.skills3}/>
            </div>
            
        )
    }
}

export default Skills