import React, { Component } from "react";
import '../components.css';

class Title extends Component{
    
    render(){
        return(
        <div className = {this.props.class}>   
            <input className = "skillsInput" id = "nameBox" type="text" placeholder = {this.props.title} />
            <hr />
         </div>           
        )
    }
}

export default Title;