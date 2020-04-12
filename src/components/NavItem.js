
import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Using Link from React router, works like an anchor tag (href) in HTML

class Navitem extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activeclass.bind(this, this.props.item)} 
                style={{ textDecoration: 'none', color: 'black' }}>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default Navitem
