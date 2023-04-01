import React from "react";
import {FaChevronRight} from "react-icons/fa";
import "./FwProjectItem.scss";

class FwProjectItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //? Calls the supplied hook when *this* is clicked
    handleClick() {
        if (this.props.project.image) this.props.clickHook(this.props.index);
    }

    render() {

        //? Maps every link supplied in the project property to an anchor tag
        const links = this.props.project.links.map((l) => <a href={l.href} target="_blank" rel="noreferrer">{l.title}</a>);

        return (
            <div className={this.props.activeIndex === this.props.index ? "FwProjectItem active": "FwProjectItem"}
                onClick={this.handleClick}
                data-index={this.props.index} >

                {this.props.project.image ? <FaChevronRight />:""}
                <div className="FwProjectItem__text">
                    <h1>{this.props.project.title}</h1>
                    <hr />
                    <div className="FwProjectItem__image">
                        {this.props.project.image ? <img src={this.props.project.image} alt="" /> : "" }
                    </div>
                    <p dangerouslySetInnerHTML={{__html: this.props.project.description}} />
                    <span className="FwProjectItem__links">
                        {links}
                    </span>
                </div>
            </div>
        );
    }
}

export default FwProjectItem;
