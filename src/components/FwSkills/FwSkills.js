import React from 'react';
import { Radar } from 'react-chartjs-2';
import "./FwSkills.scss";

const data = {
    labels: [
            "", 'HTML5', 'JavaScript', 'CSS3', 'Python',
            "React", "SQL", "JSON", "NodeJS", "Flutter",
            "Dart", "PHP", "Apache2", "Nginx", "Unity"
        ],
    datasets: [
      {
        label: 'Skill Level',
        data: [0, 8, 7, 7, 6, 3, 6, 8, 5, 4, 4, 7, 6, 5, 4],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ]
  };
  
const options = {
  scale: {
    beginAtZero: true,
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
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