import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <div className='container '>
                <div className="row">
                    <div className="col-md-3">
                        <br /><br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                        <span>Tooth Extraction</span><br />
                        <span>Check Up</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6 style={{ color: '#0FCFEC' }}>Service</h6>
                        <br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Tooth Extraction</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6 style={{ color: '#0FCFEC' }}>Oral Health</h6>
                        <br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                        <span>Tooth Extraction</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6 style={{ color: '#0FCFEC' }}>Our Address</h6>
                        <br />
                        <span>New Youk - 101010 Hudson <br /> Yards</span><br />
                        <span><FontAwesomeIcon icon="fa-brands fa-facebook" /></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;