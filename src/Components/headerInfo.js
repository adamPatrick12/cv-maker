import React, { Component } from "react";
import '../components.css';
import github from '../images/github.png';
import mail from '../images/mail.png'
import linkedin from '../images/linkedin.png'
import website from '../images/website.png'



class Info extends Component{
    
    render(){ 
        return(
            <div className = "infoBox">
                <img className = "iconImg" src={mail} alt="" />
                <input className = "infoInput" id = "nameBox" type="text" placeholder = "Your email" />
                <img className = "iconImg" src={github} alt="" />
                <input className = "infoInput" id = "nameBox" type="text" placeholder = "Github User Name" />
                <img className = "iconImg" src={website} alt="" />
                <input className = "infoInput" id = "nameBox" type="text" placeholder = "Website URL" />
                <img className = "iconImg" src={linkedin} alt="" />
                <input className = "infoInput" id = "nameBox" type="text" placeholder = "Linkdin User Name" />
            </div>
        )
    }
}

export default Info; 