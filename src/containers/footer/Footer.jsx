import React from 'react';
import logo from '../../nseLOGO.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Lorem ipsum dolor</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img style={{ width: '100px;', height: '100px' }} src={logo} />
        <p>Houston, Texas <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>mini-link</p>
        <p>mini-link</p>
        <p>mini-link</p>
        <p>mini-link</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Houston, Texas</p>
        <p>0123-952-8052</p>
        <p>info@nseadvertising.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 NSE Adveritsing. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
