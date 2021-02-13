import React from 'react'
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
                <span><a href="https://github.com/jsadsad" target="_blank"><FontAwesomeIcon className="footer-nav-GH" icon={faGithub} transform="shrink-2 left-4" /></a></span>
                <span><a href="https://www.linkedin.com/in/joshsad2" target="_blank"><FontAwesomeIcon className="footer-nav-LN" icon={faLinkedin} transform="shrink-2 left-4"/></a></span>
            </div>
        </div>
    </div>
)

export default Footer