import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/heidi.jpg';
import Social from '../components/Social'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" 
            style={{height:200, width:300}} >
             </img>
            <br/>
            <ReactTypingEffect className="typingeffect" text={['Hi there! I am Heidi',' I am a web developer']} speed={100} eraseDelay={700}/>
            
            <Social />
            </div>
            )
        }
    }
    
    export default Home