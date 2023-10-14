import {Footer} from "../components/Footer.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export const Partner = () => {

    const state = useLocation();

    //states
    const [data, setData] = useState([]);

    function getPartnerDetails(){
        let id = state.state;

        axios.get(`http://localhost:5000/get-partner?id=${id}`)
            .then((res)=>{
                setData(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    //Call Partner Details
    useEffect(()=>{
        getPartnerDetails();
    },[])

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="partner">
                <div className="partner-aside">
                    <div className="profile">
                        <span className="name">{data.name}</span>
                        <span className="des">{data.intro}</span>
                        <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {data.rating}</span> ({data.reviewCount})</span>
                    </div>
                    <div className="tasks">
                        <div className="task-head">
                            <span>{data.taskComplexity}</span>
                            <span className="price">{data.price}</span>
                        </div>
                        <span className="del-head"><i className="fa-regular fa-calendar"/>&nbsp;{data.deliveryTime}</span>
                        <div className="prop-btns">
                            <button type="button">Request Proposal</button>
                            <button type="button">Chat with me</button>
                        </div>
                    </div>
                    <div className="testimonials">
                        <span className="test-head">What people say?</span>
                        <span className="test-text">{data.testimonial.text} ~ {data.testimonial.author}</span>
                    </div>
                </div>
                <div className="partner-main">
                    <div className="main-banner">
                        <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80" alt="Partner Banner"/>
                    </div>
                    <div className="partner-aside mobile">
                        <div className="profile">
                            <span className="name">{data.name}</span>
                            <span className="des">{data.intro}</span>
                            <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {data.rating}</span> ({data.reviewCount})</span>
                        </div>
                        <div className="tasks">
                            <div className="task-head">
                                <span>{data.taskComplexity}</span>
                                <span className="price">{data.price}</span>
                            </div>
                            <span className="del-head"><i className="fa-regular fa-calendar"/>&nbsp;{data.deliveryTime}</span>
                            <div className="prop-btns">
                                <button type="button">Request Proposal</button>
                                <button type="button">Chat with me</button>
                            </div>
                        </div>
                        <div className="testimonials">
                            <span className="test-head">What people say?</span>
                            <span className="test-text">{data.testimonial.text} ~ {data.testimonial.author}</span>
                        </div>
                    </div>
                    <div className="main-about">
                        <span className="about-head">About {data.name}</span>
                        <div className="about-det">
                            <div className="det-item">
                                <span className="det-head">From</span>
                                <span className="det-value">{data.about.from}</span>
                            </div>
                            <div className="det-item">
                                <span className="det-head">Partner Since</span>
                                <span className="det-value">{data.about.partnerSince}</span>
                            </div>
                            <div className="det-item">
                                <span className="det-head">Average Response Time</span>
                                <span className="det-value">{data.about.averageResponseTime}</span>
                            </div>
                        </div>
                        <div className="about-des">
                            <span className="des-head">ABOUT</span>
                            <span className="des-value">{data.about.description}</span>
                        </div>
                        <div className="about-more">
                            <div className="services">
                                <span className="header">Services I Offer</span>
                                <ul>
                                    {
                                        data.about.services.map((value,index)=>{
                                            return(
                                                <li key={index}>{value}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="why">
                                <span className="header">Why me</span>
                                <ul>
                                    {
                                        data.about.benefits.map((value,index)=>{
                                            return(
                                                <li key={index}>{value}</li>
                                            )
                                        })
                                    }
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