import React, { Component } from "react";
import '../components.css';
import Info from "./headerInfo"

class Name extends Component{
    
    render(){ 
        return(
            <div className = "headerBox">
                <input className = "nameInput" id = "nameBox" type="text" placeholder = "Your Name" />
                <Info/>
            </div>
        )
    }
}

export default Name; 