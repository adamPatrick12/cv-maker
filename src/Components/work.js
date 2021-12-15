import React, { Component } from "react";
import '../components.css';

class Work extends Component{
    
    render(){
        return(
            <div className = "workBox">   
            <div className = "employerBox">
                <input className = "workTitle" id = "nameBox" type="text" placeholder = "EMPLOYER" />
                <input className = "workDate" id = "nameBox" type="text" placeholder = "Jan 20xx - Jan 20xx" />
            </div>
            <input className = "workPosition" id = "nameBox" type="text" placeholder = "POSITION" />
            </div>
            
        )
    }
}

export default Work;