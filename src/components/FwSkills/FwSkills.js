import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./FwSkills.scss";

const skills = {
  'HTML5': 8,
  'JavaScript': 7,
  'CSS3': 8,
  'Python': 7,
  "React": 5,
  "SQL": 7,
  "NodeJS": 5,
  "Flutter": 2,
  "PHP": 7, 
  "Power Apps": 4,
  "Power Automate": 3
}

const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: 'Skill Level',
        data: Object.values(skills),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)'
      },
    ]
  };
  
const options = {
  scale: {
    min: 0,
    max: 10
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    line: {
      borderWidth: 1
    }
  }
};

class FwSkills extends React.Component {

    render() {          

        return (
        <div className="FwSkills">
            <div className="FwSkills__title FwMod-darkMode-bg" name="skills">
                <h1>A selection of <br/><span>My Skills</span></h1>
            </div>
            <div className="FwSkills__skills FwMod-darkMode-bg">
                <div>
                    <Radar data={data} options={options} />
                </div>
            </div>
        </div>
        );
    }

}


export default FwSkills;