import React from 'react';
import wordSphere from './wordSphere';
import "./FwSkills.scss";


class FwSkills extends React.Component {

    componentDidMount() {
        
        const canvas = document.getElementById('canvas');

        const texts = [
        'HTML5', 'JavaScript', 'CSS3', 'Python',
        "React", "SQL", "JSON", "NodeJS", "Flutter",
        "Dart", "PHP", "Apache2", "Nginx", "Unity"
        
        ];
        const counts = [1,2,4,4,2,1];

        const options = {
        tilt: Math.PI / 9,
        initialVelocityX: 0.09,
        initialVelocityY: 0.09,
        initialRotationX: Math.PI * 0.14,
        initialRotationZ: 0
        };
 
        wordSphere(canvas, texts, counts, options);
    }

    render() {          

        return (
        <div className="FwSkills">
            <div className="FwSkills__title" name="skills">
                <h1>A selection of <br/><span>My Skills</span></h1>
            </div>
            <div className="FwSkills__skills">
                <canvas id="canvas"></canvas>
            </div>
        </div>
        );
    }

}


export default FwSkills;