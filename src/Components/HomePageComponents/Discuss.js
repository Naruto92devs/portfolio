import React from "react";
import './Disscuss.css';
import sms from '../Images/sms.svg';

const Discuss = () => {
  
    return (
        <div className="discuss">
            <h2>
                <span className="span1">Have an Awsome Project <br/> Idea? </span>
                <span>Let’s Discuss</span>
            </h2>
            <div className="send-me">
                <input placeholder="Enter Email Address" />
                <a href="mailto:m.suhaibmpdgw@gmail.com" className="btn1">
                    Send
                </a>
                <img src={sms} alt="logo"/>
            </div>
        </div>
    );
}

export default Discuss;