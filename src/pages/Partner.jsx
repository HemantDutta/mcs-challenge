import {Footer} from "../components/Footer.jsx";
import {Navbar} from "../components/Navbar.jsx";

export const Partner = () => {
    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="partner">
                <div className="partner-aside">
                    <div className="profile">
                        <span className="name">Lorem ipsum.</span>
                        <span className="des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque ipsum laudantium, nemo perferendis quam quas quos rerum tenetur vitae.</span>
                        <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> 4.8</span> (89)</span>
                    </div>
                    <div className="tasks">
                        <div className="task-head">
                            <span>Basic to complex tasks</span>
                            <span className="price">₹4,370</span>
                        </div>
                        <span className="del-head"><i className="fa-regular fa-calendar"/>&nbsp;Delivers the job within 2 days</span>
                        <div className="prop-btns">
                            <button type="button">Request Proposal</button>
                            <button type="button">Chat with me</button>
                        </div>
                    </div>
                    <div className="testimonials">
                        <span className="test-head">What people say?</span>
                        <span className="test-text">I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</span>
                    </div>
                </div>
                <div className="partner-main">
                    <div className="main-banner">
                        <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" alt="Partner Banner"/>
                    </div>
                    <div className="main-about">
                        <span className="about-head">About Michael Jackson</span>
                        <div className="about-det">
                            <div className="det-item">
                                <span className="det-head">From</span>
                                <span className="det-value">INDIA</span>
                            </div>
                            <div className="det-item">
                                <span className="det-head">Partner Since</span>
                                <span className="det-value">2011</span>
                            </div>
                            <div className="det-item">
                                <span className="det-head">Average Response Time</span>
                                <span className="det-value">30 minutes</span>
                            </div>
                        </div>
                        <div className="about-des">
                            <span className="des-head">ABOUT</span>
                            <span className="des-value">I am a Professional Charted Accountant here to offer professional services of accounting and finance, financial statements, Bookkeeping in affordable price.</span>
                        </div>
                        <div className="about-more">
                            <div className="services">
                                <span className="header">Services I Offer</span>
                                <ul>
                                    <li>Financial accounting</li>
                                    <li>Financial statements</li>
                                    <li>Bookkeeping</li>
                                    <li>Accounting and finance</li>
                                    <li>Corporate Finance</li>
                                    <li>Maintain Charts of Accounts</li>
                                    <li>Profit and loss statements</li>
                                    <li>Bank Reconciliation</li>
                                    <li>Balance Sheets</li>
                                </ul>
                            </div>
                            <div className="why">
                                <span className="header">Why me</span>
                                <ul>
                                    <li>On-time delivery</li>
                                    <li>24/7 customer support</li>
                                    <li>Error-free documents</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended">
                <span className="header">Recommended for you</span>
                <div className="grid">
                    <div className="grid-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" alt="Partner image"/>
                        <div className="card-name">
                            <span>Lorem ipsum.</span>
                            <span>₹4,370</span>
                        </div>
                        <span className="card-des">I will do business evaluation and corporate services</span>
                        <span className="card-reviews"><span className="rev-col"><i className="fa-solid fa-star"/> 4.8</span> (89)</span>
                        <div className="card-btn">
                            <button type="button" >View Services</button>
                        </div>
                    </div>
                    <div className="grid-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" alt="Partner image"/>
                        <div className="card-name">
                            <span>Lorem ipsum.</span>
                            <span>₹4,370</span>
                        </div>
                        <span className="card-des">I will do business evaluation and corporate services</span>
                        <span className="card-reviews"><span className="rev-col"><i className="fa-solid fa-star"/> 4.8</span> (89)</span>
                        <div className="card-btn">
                            <button type="button" >View Services</button>
                        </div>
                    </div>
                    <div className="grid-card">
                        <img className="card-img" src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" alt="Partner image"/>
                        <div className="card-name">
                            <span>Lorem ipsum.</span>
                            <span>₹4,370</span>
                        </div>
                        <span className="card-des">I will do business evaluation and corporate services</span>
                        <span className="card-reviews"><span className="rev-col"><i className="fa-solid fa-star"/> 4.8</span> (89)</span>
                        <div className="card-btn">
                            <button type="button" >View Services</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}