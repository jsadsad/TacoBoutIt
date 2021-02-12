import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <div className="tbi-footer">
        <div className="tbi-footer-scape">
            <img src={window.cityFooter} className="footer-city" alt="Yelp City" />
            <div className="tbi-copyright">
                <p>Made with ♥ by JS</p>
            </div>
            <div className="socials">
                <span className="footer-nav-GH"><a href="https://github.com/jsadsad" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></span>
                <span className="footer-nav-LN"><a href="https://www.linkedin.com/in/joshsad2" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></span>
            </div>
        </div>
    </div>
)

export default Footer;