import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./FwSkills.scss";

const data = {
    labels: [
            'HTML5', 'JavaScript', 'CSS3', 'Python',
            "React", "SQL", "NodeJS", "Flutter",
            "Dart", "PHP", "Unity", "Java"
        ],
    datasets: [
      {
        label: 'Skill Level',
        data: [8, 7, 8, 7, 4, 7, 4, 2, 3, 7, 4, 2],
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