import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./FwSkills.scss";

const skills = {
  'HTML': 8,
  'JavaScript': 7,
  'CSS3': 8,
  'Python': 7,
  "React": 7,
  "SQL": 6,
  "NodeJS": 6,
  "React Native / Expo": 4,
  "PHP": 6, 
  "Power Apps": 8,
  "Power Automate": 7
}

const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: 'Skill Level',
        data: Object.values(skills),
        backgroundColor: '#da3d3d35',
        borderColor: '#da3d3d'
      },
    ]
  };
  
const options = {
  scales: {
    r: {
      ticks: {
        display: false
      }
    }
  },
  scale: {
    min: 0,
    max: 10,
  },
  ticks: {display: false},
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