import {Navbar} from "../components/Navbar.jsx";

export const Home = () => {
    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="home-page">
                {/*Hero Section*/}
                <div className="hero" id="hero">
                    <div className="hero-left">
                        <span className="header">Find <span className="highlight">Partners</span> (CAs) available online</span>
                        <span className="tag"><span className="bold">CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</span>
                        <div className="cta">
                            <input type="text" name="search" id="search" placeholder="Search by name"/>
                            <button type="button">Search</button>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src="src/assets/hero_1.png" alt="Hero right"/>
                        <img src="src/assets/hero_2.png" alt="Hero right"/>
                        <img src="src/assets/hero_3.png" alt="Hero right"/>
                    </div>
                    {/*Section Fader Image*/}
                    <img src="src/assets/hero_fader.png" alt="Fader" className="hero-fader"/>
                </div>
                {/*Hero Section End*/}
                {/*  Join Us  */}
                <div className="join-us" id="join-us">
                    <div className="join-us-header">
                        <span className="header">Want to <span className="highlight">Join</span> us?</span>
                        <span className="tag">To remain with us, it is essential that you diligently follow the steps provided</span>
                    </div>
                    <div className="join-us-grid">
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>1<sup>st</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">Commencement of business</span>
                                <span className="tag">Invested shareholders must confirm payment and office address.</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>Within 180 days</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹50000</span> for the company.</span>
                                    <span><span className="bold">₹1000</span> /day for directors.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>2<sup>nd</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">Auditor Appointment</span>
                                <span className="tag">Company informs new auditor and submits ADT.1 form to ROC.</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>Within 30 days</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹300</span> per month.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>3<sup>rd</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">DIN eKYC</span>
                                <span className="tag">Directors share personal information for identification & verification.</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>Every Year</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹5000</span> one time.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>4<sup>th</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">DPT-3</span>
                                <span className="tag">Companies report money taken from people to ROC; auditors confirm details.</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>Within 30 days</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹300</span> per month.</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>5<sup>th</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">MCA Form AOC-4</span>
                                <span className="tag">It's like an official report card for a company's documents</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>Within 30 days</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹300</span> per month.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Join Us End  */}
            </div>
        </>
    )
}