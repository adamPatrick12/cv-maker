import React, {Component} from "react";
import '../components.css';


class SkillsInfo extends Component{
    
   
    
    render(){
        const {addSkillDom, addSkillDom2, addSkillDom3} = this.props
        return(
            <div className = 'skillsInfoBox'>
                <div className = "skillsRow">
                    <input className = "skillsInfo" id = "nameBox" type="text" placeholder = "Languages:" />
                     {addSkillDom}
                </div>
                <div className = "skillsRow">
                    <input className = "skillsInfo2" id = "nameBox" type="text" placeholder = "Frameworks:" />
                    {addSkillDom2}
                </div>
                <div >
                    <input className = "skillsInfo3" id = "nameBox" type="text" placeholder = "Software & Tools:" />
                    {addSkillDom3}        
                </div>
                
            </div>
         
        )
    }
}

export default SkillsInfo