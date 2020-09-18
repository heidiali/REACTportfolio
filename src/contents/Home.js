import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/heidi.jpg';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <br/>
            <ReactTypingEffect className="typingeffect" text={['Hello and welcome! My name is Heidi.']} speed={100} eraseDelay={700}/>
            
            <Social />
            </div>
            )
        }
    }
    
    export default Home