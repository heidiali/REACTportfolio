import React, { Component } from 'react'

class Skills extends Component {

    //State variable - old style
    //TODO: Refactor in modern way
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'C#', 'REACT JS', '.NET', 'REST API']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li key={value}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills
