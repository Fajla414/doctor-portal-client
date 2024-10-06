import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer-container mt-5 pt-5" style={{borderTop: '1px solid #0FCFEC', backgroundImage: 'linear-gradient(45deg, #19D3AE, #0FCFEC)'}}>
            <div className='container text-light'>
                <div className="row ">
                    <div className="col-md-3">
                        <br /><br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                        <span>Tooth Extraction</span><br />
                        <span>Check Up</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6  className='fw-bold'>Service</h6>
                        <br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Tooth Extraction</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6 className='fw-bold' >Oral Health</h6>
                        <br />
                        <span>Emergency Dentel Care</span><br />
                        <span>Check Up</span><br />
                        <span>Check Up</span><br />
                        <span>Treatment of Personal Diseases</span><br />
                        <span>Tooth Extraction</span><br />
                    </div>
                    <div className="col-md-3">
                        <h6  className='fw-bold'>Our Address</h6>
                        <br />
                        <span>New Youk - 101010 Hudson <br /> Yards</span><br />
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-5 m-auto text-center fw-bold mt-5">Copyright@  Programing Hero</div>
                </div>

            </div>
        </div>
    );
};

export default Footer;