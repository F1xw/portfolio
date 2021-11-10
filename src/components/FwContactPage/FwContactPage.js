import React from "react";
import { FaChevronRight, FaGithub, FaEnvelope, FaTwitter, FaPaypal, FaDiscord } from 'react-icons/fa';
import './FwContactPage.css';

class FwContactPage extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)

        this.state = {
            activeIndex: null
        }
    }


    handleClick(e) {
        if (this.state.activeIndex === e.target.dataset.index) {
            this.setState({
                activeIndex: null
            })
        }else{
            this.setState({
                activeIndex: e.target.dataset.index
            })
        }
    }

    render() {
        return (
            <div className="FwContactPage content">
                <div className="FwContactPage__faq">
                    <ul className="FwContactPage__faqList">
                        <li className={parseInt(this.state.activeIndex) ===  0 ? "FwContactPage__faqListItem active": "FwContactPage__faqListItem"} onClick={this.handleClick} data-index={0}>
                            <span className="FwContactPage__faqListItemTitle">Freelance job inquiry</span><FaChevronRight />
                        </li>
                        <div className="FwContactPage__faqListItemContent">
                            <div className="text">
                                <p>
                                    Thank you for being interested in my work. I will happily help you out, given that I have enough time on hand.
                                    I don't have any fixed prices or work schedules, so I'll set these individually. For more information please send an E-Mail
                                    to <a href="mailto:freelance@flowei.tech">freelance@flowei.tech</a>. I will try to respond as quickly as possible.
                                </p>
                            </div>
                        </div>
                        <li className={parseInt(this.state.activeIndex) === 1 ? "FwContactPage__faqListItem active": "FwContactPage__faqListItem"} onClick={this.handleClick} data-index={1}>
                            <span className="FwContactPage__faqListItemTitle">Report a bug</span><FaChevronRight />
                        </li>
                        <div className="FwContactPage__faqListItemContent">
                            <div className="text">
                                <p>
                                    If you found a bug in any of my projects and would like to disclose it, please message me at <a href="mailto:bugs@flowei.tech">bugs@flowei.tech</a>.
                                    Please add a description of what happened, as well as the steps to take for recreation. If possible, please add screenshots. Thank you very much for
                                    wanting to disclose the bug properly. I will try to fix it as quickly as possible or answer if I have any questions.
                                </p>
                            </div>
                        </div>
                        <li className={parseInt(this.state.activeIndex) ===  2 ? "FwContactPage__faqListItem active": "FwContactPage__faqListItem"} onClick={this.handleClick} data-index={2}>
                            <span className="FwContactPage__faqListItemTitle">Anything else</span><FaChevronRight />
                        </li>
                        <div className="FwContactPage__faqListItemContent">
                            <div className="text">
                                <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic in voluptas odio adipisci, modi quae quas obcaecati illo architecto fuga deleniti aut possimus magni ad, officiis iste? Provident, sequi?
                                </p>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="FwContactPage__links">
                    <ul className="FwContactPage__linksList">
                        <li onClick={() => {window.open("https://github.com/F1xw", "_blank")}} className="FwContactPage__linksListItem"><h4><FaGithub /> &nbsp; GitHub</h4></li>
                        <li onClick={() => {window.open("mailto:flo@flowei.tech", "_blank")}} className="FwContactPage__linksListItem"><h4><FaEnvelope /> &nbsp; E-Mail</h4></li>
                        <li onClick={() => {window.open("https://twitter.com/flowei_", "_blank")}} className="FwContactPage__linksListItem"><h4><FaTwitter /> &nbsp; Twitter</h4></li>
                        <li onClick={() => {window.open("https://discord.gg/6fNn2htBuj", "_blank")}} className="FwContactPage__linksListItem"><h4><FaDiscord /> &nbsp; Discord</h4></li>
                        <li onClick={() => {window.open("https://paypal.me/f1xw", "_blank")}} className="FwContactPage__linksListItem"><h4><FaPaypal /> &nbsp; Donate</h4></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default FwContactPage;