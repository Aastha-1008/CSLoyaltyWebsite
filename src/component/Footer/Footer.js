import React from "react";
import { useTypingText } from "../useTypingText";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm, faHandshake, faMicrophoneLines, faCopyright, faLocationDot, faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn,faSquareFacebook,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";

import './Footer.scss';

const Footer = () => {
    const data = useTypingText(["CONNECTED", "INVOLVED"], 130, 20);

    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_img">
                    <h2>GET <i><span>{data.word}</span></i></h2>
                </div>
                <div className="footer_top_division">
                    <div>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHandshake} style={{ 'width': '3rem', 'height': '3rem' }} />
                            <h2 className="footer_h2">SPONSOR THIS EVENT</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <FontAwesomeIcon icon={faMicrophoneLines} style={{ 'width': '3rem', 'height': '3rem' }} />
                            <h2 className="footer_h2">REGISTER AS SPEAKER</h2>
                        </Link>
                    </div>
                    <div>
                        <Link to="/">
                            <FontAwesomeIcon icon={faPhotoFilm} style={{ 'width': '3rem', 'height': '3rem' }} />
                            <h2 className="footer_h2">BECOME A MEDIA PARTNER</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer_down">
                <div className="footer_second_1">
                    <div className="footer_second_11">
                        <h2>An Initiative by</h2>
                        <img src="https://cxloyaltymena.com/wp-content/uploads/2022/06/verve-white.png" alt="verve management" />
                    </div>
                    <div className="footer_second_links">
                        <div className="footer_second_12">
                            <h2>Quick Links</h2>
                            <ul>
                                <li>Event Details</li>
                                <li>Schedule</li>
                                <li>Featured Speakers</li>
                                <li>Valued Sponsors</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="footer_second_13">
                            <h2>Social Media</h2>
                            <p>Connect with us on social media</p>
                            <div className="footer_second_medialinks">
                                <FontAwesomeIcon icon={faLinkedinIn} style={{'padding':'1.2rem 1.2rem','width':'1.5rem','height':'1.5rem'}}/>
                                <FontAwesomeIcon icon={faSquareFacebook} style={{'padding':'1.2rem 1.2rem','width':'1.5rem','height':'1.5rem'}}/>
                                <FontAwesomeIcon icon={faTwitter} style={{'padding':'1.2rem 1.2rem','width':'1.5rem','height':'1.5rem'}}/>
                                <FontAwesomeIcon icon={faInstagram} style={{'padding':'1.2rem 1.2rem','width':'1.5rem','height':'1.5rem'}}/>
                            </div>
                        </div>
                        <div className="footer_second_14">
                            <h2>Address</h2>
                            <p><FontAwesomeIcon icon={faLocationDot} /> 1702 & 1706 , Mazaya Business Avenue BB2, Al Thanya Fifth, Jumeirah Lake Towers, Dubai, UAE</p>
                            <p><FontAwesomeIcon icon={faPhone} /> +971 4 243 4677/88</p>
                            <p><FontAwesomeIcon icon={faEnvelopeOpen} /> info@verve-management.com</p>
                        </div>
                    </div>
                </div>
                <hr style={{ 'width': '70rem' }} />
                <div className="footer_second_2">
                    <p>Copyrights <FontAwesomeIcon icon={faCopyright} /> 2023</p>
                    <p>All Rights Reserved | CX  & LOYALTY MENA SUMMIT 2023.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;