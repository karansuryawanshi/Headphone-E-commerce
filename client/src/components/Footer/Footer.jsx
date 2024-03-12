import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const navigateToHeadphone =()=>{
        navigate("/category/1")
    }
    const navigateToSmartWatches =()=>{
        navigate("/category/4")
    }
    const navigateToSpeaker =()=>{
        navigate("/category/3") 
    }
    const navigateToEarbud =()=>{
        navigate("/category/2")
    }
    
     
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Assumenda ab, veritatis ducimus, debitis officiis atque
                          repudiandae consequatur sequi provident culpa eum molestias
                           vel similique adipisci!
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            98(A) Sudarshan Coloney Deopur, Dhule, Manarashtra, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9356497470</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: electrostore@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text"onClick={navigateToHeadphone}>Headphones</span>
                    <span className="text" onClick={navigateToSmartWatches}>Smart Watches</span>
                    <span className="text" onClick={navigateToSpeaker}>Bluetooth Speakers</span>
                    <span className="text" onClick={navigateToEarbud}>Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        ELECTOSTORE 2022 CREATED BY KARAN SURYAWANSHI. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;