import React, { Component } from "react";
import '../components.css';

class BulletPoints extends Component{
    render(){
        return(
            <ul>
               {this.props.addWork}
            </ul>
        )
    }
}

export default BulletPoints