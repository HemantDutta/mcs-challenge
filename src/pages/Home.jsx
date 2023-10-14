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
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <span className="tag">It's like an official report card for a company's documents</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>On or before 30th November</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹200</span> per month.</span>
                                    <span>(No Upper Limit)*</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="item-pos">
                                <span>6<sup>th</sup></span>
                            </div>
                            <div className="item-top">
                                <span className="header">MCA Form MGT-7</span>
                                <span className="tag">Companies must annually report activities and finances to the registrar.</span>
                            </div>
                            <div className="item-bottom">
                                <div className="due-date">
                                    <span>Due Date</span>
                                    <span>On or before 31st December</span>
                                </div>
                                <div className="penalty">
                                    <span>Penalty Fees</span>
                                    <span><span className="bold">₹200</span> per month.</span>
                                    <span>(No Upper Limit)*</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="join-us-notice">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</span>
                    </div>
                </div>
                {/*  Join Us End  */}
                {/*  About  */}
                <div className="about" id="about">
                    <div className="about-left">
                        <div className="left-header">
                            <span><span className="highlight">All-in-One</span> platform that Makes Easier</span>
                        </div>
                        <div className="left-tag">
                            <span>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</span>
                        </div>
                        <div className="left-grid">
                            <div className="grid-item">
                                <img src="src/assets/search_icon.png" alt=""/>
                                <span><span className="bold">SEARCH</span> for vital company information</span>
                            </div>
                            <div className="grid-item">
                                <img src="src/assets/connect_icon.png" alt=""/>
                                <span><span className="bold">CONNECT</span> with the resources to meet your business needs</span>
                            </div>
                            <div className="grid-item">
                                <img src="src/assets/research_icon.png" alt=""/>
                                <span><span className="bold">RESEARCH</span> and generate report that drive growth </span>
                            </div>
                            <div className="grid-item">
                                <img src="src/assets/search_icon.png" alt=""/>
                                <span><span className="bold">ACADEMY</span> to give you the skills for success in your career</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src="src/assets/about_img.png" alt="About"/>
                    </div>
                </div>
                {/*  About End  */}
            </div>
        </>
    )
}