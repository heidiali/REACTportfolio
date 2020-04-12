import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Web Development, C# and .NET stack" where="Academy by Academic Work" from="2018" to="2018"/>
            <Widecard title="MSc.Biology (Physiology)" where="University of Oulu" from="July 2008" to="2014"/>
            </div>
            )
        }
    }
    
export default Education
    