import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./FwSkills.scss";

const data = {
    labels: [
            'HTML5', 'JavaScript', 'CSS3', 'Python',
            "React", "SQL", "JSON", "NodeJS", "Flutter",
            "Dart", "PHP", "Apache2", "Nginx", "Unity", "Java"
        ],
    datasets: [
      {
        label: 'Skill Level',
        data: [8, 7, 7, 6, 3, 6, 8, 5, 2, 2, 7, 6, 5, 4, 2],
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
            <div className="FwSkills__title" name="skills">
                <h1>A selection of <br/><span>My Skills</span></h1>
            </div>
            <div className="FwSkills__skills">
                <div>
                    <Radar data={data} options={options} />
                </div>
            </div>
        </div>
        );
    }

}


export default FwSkills;