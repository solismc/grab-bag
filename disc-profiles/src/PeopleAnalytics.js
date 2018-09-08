import React, { Component } from 'react';

class peopleanalytics extends Component {
    
    componentDidMount() {
        fetch("./data.json")
          .then(json => {
            console.log(json)
          })
      }
    
    render() {
        return (
            <div>
            <h1 className="header">e-Profile</h1>
            <img src="/images/Profile" alt="e-Profile" />
            <p>The e-stimate® preference profile is very easy to understand, both graphically and textually.Nevertheless,the depth and the precision will impress you.</p>
            <h1 className="header">e-Team</h1>
            <img src="/images/Team.png" alt="e-Team"/>
            <p>The e-team profile uncovers the strengths of the team, detailing personal behavioral for individual members as well as for the overall team.</p>
            <h1 className="header">e-Jobs</h1>
            <img src="./images/e-gruppe" alt="e-Jobs"/>
            <p>Are you looking to find the matching individual for the matching job? Do you need to analyze candidates based on their personality? Are you seeking talent within the organization?</p>
            </div>
        );
    }
}

export default peopleanalytics;
