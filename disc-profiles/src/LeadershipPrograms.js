import React, { Component } from 'react';

class leadershipPrograms extends Component {

    componentDidMount() {
        fetch("./data.json")
          .then(json => {
            console.log(json)
          })
      }
    render() {
        return (
            <div>
                <h1 className="header">Crosscultural Competence </h1>
                <img src="./images/Cross-Competence.png" alt="Cross-cultural Competence"/>
                <p>Classroom trainings and personal advice are valuable. However, what if there is a lack of time to organize a consulting session or if something remains unclear after the training? After all, most questions do arise in practice. Wouldn’t it be great if you had an assistant who would take these uncertainties away, answer your questions or help you find solutions anytime and anywhere?</p>
                <h1 className="header">Success Mindsets: 6 Ways to Deliver Brilliant Results</h1>
                <img src="./images/Brilliant-or-Blunder" alt="Success Mindsets"/>
                <p>Adapting yourself to the needs of your goals might become a challenge. How can you make sure you approach individuals based on their preferences?</p>
                <h1 className="header">Business Communication</h1>
                <img src="./images/CA-4.png" alt="Business Communication" />
                <p>The e-northamerica communication analysis CA® is a model in order to register verbally observable behaviors. The model is based on the Harvard IPA communication model (Prof.Bales) and may be employed for bilateral as well as multilateral talks.</p>
            </div>
        );
    }
}

export default leadershipPrograms;
