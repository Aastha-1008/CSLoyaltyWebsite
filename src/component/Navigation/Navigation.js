import React from "react";
import summitLogo from '../../images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Navigation.scss';


const Navigation = () => {
    return(
        <div className="navigation_container">
            <div className="summitLogo">
                <img src={summitLogo} alt="logo"/>
            </div>
            <div className="navigation_links">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">
                            EVENT DETAILS <FontAwesomeIcon icon={faAngleDown} className="arrow-icon"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">SPEAKERS</Link>
                    </li>
                    <li>
                        <Link to="/">SCHEDULE</Link>
                    </li>
                    <li>
                        <Link to="/">SPONSORS & PARTNERS</Link>
                    </li>
                    <li>
                        <Link to="/">AWARDS</Link>
                    </li>
                    <li>
                        <Link to="/">GALLERY</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACT  <FontAwesomeIcon icon={faAngleDown} className="arrow-icon"/></Link>
                    </li>

                </ul>
            </div>
            <div className="register_btn">
                <button>Register</button>
            </div>
        </div>
    );
}

export default Navigation;