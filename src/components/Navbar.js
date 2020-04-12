import React, { Component } from 'react';
import NavItem from './NavItem';
import Social from './Social';

class Navbar extends Component {

    // Function to select active nav item - toggle state
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    //add .active class to clicked NavItem
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };

    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" activeclass={this.activeitem} ></NavItem>
                    <NavItem item="About" tolink="/about" activeclass={this.activeitem} ></NavItem>
                    <NavItem item="Education" tolink="/education" activeclass={this.activeitem}></NavItem>
                    <NavItem item="Skills" tolink="/skills" activeclass={this.activeitem}></NavItem>
                    <NavItem item="Contact" tolink="/contact" activeclass={this.activeitem}></NavItem>
                </ul>
                <Social />
            </nav>
        )
    }
}

export default Navbar