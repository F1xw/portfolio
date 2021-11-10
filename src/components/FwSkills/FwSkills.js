import React from 'react';
import { TagCloud } from 'react-tagcloud'
import "./FwSkills.css";

class FwSkills extends React.Component {

    render() {

        const data = [
            { value: 'JavaScript', count: 25 },
            { value: 'React', count: 5 },
            { value: 'NodeJS', count: 20 },
            { value: 'CSS3', count: 30 },
            { value: 'HTML5', count: 30 },
            { value: 'SQL', count: 25 },
            { value: 'PHP', count: 35 },
            { value: 'Python', count: 30 },
            { value: 'Flutter', count: 15 },
            { value: 'Unity', count: 10 },
          ]
          

        return (
        <div className="FwSkills">
            <div className="FwSkills__title" name="skills">
                <h1>A selection of <br/><span>My Skills</span></h1>
            </div>
            <div className="FwSkills__skills">
            <TagCloud
                minSize={15}
                maxSize={55}
                tags={data}
                shuffle={true}
                colorOptions={{
                    luminosity: 'dark',
                    hue: 'purple'
                }}
                onClick={tag => alert(`'${tag.value}' was selected!`)}
            />
            </div>
        </div>
        );
    }

}

export default FwSkills;