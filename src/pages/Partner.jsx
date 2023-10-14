import {Footer} from "../components/Footer.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export const Partner = () => {

    const state = useLocation();

    //states
    const [data, setData] = useState([]);
    const [rec, setRec] = useState([]);
    const [loading, setLoading] = useState(true);

    function getPartnerDetails(partId) {
        let id = partId?partId:state.state;

        axios.get(`http://localhost:5000/get-partner?id=${id}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getRec(){
        axios.get("http://localhost:5000/get-rec")
            .then((res)=>{
                setRec(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    //Call Partner Details
    useEffect(() => {
        getPartnerDetails("");
        getRec();
    }, [])

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            {
                loading &&
                <>
                    <div className="loading">
                        <span>Loading...</span>
                    </div>
                </>
            }
            {
                !loading &&
                <>
                    <div className="partner">
                        <div className="partner-aside">
                            <div className="profile">
                                <span className="name">{data ? data.name : "Loading..."}</span>
                                <span className="des">{data ? data.intro : "Loading..."}</span>
                                <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {data ? data.rating : "Loading..."}</span> ({data ? data.reviewCount : "Loading..."})</span>
                            </div>
                            <div className="tasks">
                                <div className="task-head">
                                    <span>{data ? data.taskComplexity : "Loading..."}</span>
                                    <span className="price">{data ? data.price : "Loading..."}</span>
                                </div>
                                <span className="del-head"><i className="fa-regular fa-calendar"/>&nbsp;{data ? data.deliveryTime : "Loading..."}</span>
                                <div className="prop-btns">
                                    <button type="button">Request Proposal</button>
                                    <button type="button">Chat with me</button>
                                </div>
                            </div>
                            <div className="testimonials">
                                <span className="test-head">What people say?</span>
                                <span className="test-text">{data ? data.testimonial.text : "Loading..."} ~ {data ? data.testimonial.author : "Loading..."}</span>
                            </div>
                        </div>
                        <div className="partner-main">
                            <div className="main-banner">
                                <img src={data.image} alt="Partner Banner"/>
                            </div>
                            <div className="partner-aside mobile">
                                <div className="profile">
                                    <span className="name">{data ? data.name : "Loading..."}</span>
                                    <span className="des">{data ? data.intro : "Loading..."}</span>
                                    <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {data ? data.rating : "Loading..."}</span> ({data ? data.reviewCount : "Loading..."})</span>
                                </div>
                                <div className="tasks">
                                    <div className="task-head">
                                        <span>{data ? data.taskComplexity : "Loading..."}</span>
                                        <span className="price">{data ? data.price : "Loading..."}</span>
                                    </div>
                                    <span className="del-head"><i className="fa-regular fa-calendar"/>&nbsp;{data ? data.deliveryTime : "Loading..."}</span>
                                    <div className="prop-btns">
                                        <button type="button">Request Proposal</button>
                                        <button type="button">Chat with me</button>
                                    </div>
                                </div>
                                <div className="testimonials">
                                    <span className="test-head">What people say?</span>
                                    <span className="test-text">{data ? data.testimonial.text : "Loading..."} ~ {data ? data.testimonial.author : "Loading..."}</span>
                                </div>
                            </div>
                            <div className="main-about">
                                <span className="about-head">About {data ? data.name : "Loading..."}</span>
                                <div className="about-det">
                                    <div className="det-item">
                                        <span className="det-head">From</span>
                                        <span className="det-value">{data ? data.about.from : "Loading..."}</span>
                                    </div>
                                    <div className="det-item">
                                        <span className="det-head">Partner Since</span>
                                        <span className="det-value">{data ? data.about.partnerSince : "Loading..."}</span>
                                    </div>
                                    <div className="det-item">
                                        <span className="det-head">Average Response Time</span>
                                        <span className="det-value">{data ? data.about.averageResponseTime : "Loading..."}</span>
                                    </div>
                                </div>
                                <div className="about-des">
                                    <span className="des-head">ABOUT</span>
                                    <span className="des-value">{data ? data.about.description : "Loading..."}</span>
                                </div>
                                <div className="about-more">
                                    <div className="services">
                                        <span className="header">Services I Offer</span>
                                        <ul>
                                            {
                                                data.about.services.map((value, index) => {
                                                    return (
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
                                                data.about.benefits.map((value, index) => {
                                                    return (
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
                            {
                                rec.map(((value, index) => {
                                    return(
                                        <div className="grid-card" key={index}>
                                            <img className="card-img" src={value.image} alt={value.name}/>
                                            <div className="card-name">
                                                <span>{value.name}</span>
                                                <span>{value.price}</span>
                                            </div>
                                            <span className="card-des">{value.intro}</span>
                                            <span className="card-reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {value.rating}</span> ({value.reviewCount})</span>
                                            <div className="card-btn">
                                                <button onClick={()=>{getPartnerDetails(value.id); window.scrollTo(0,0)}}>View Services</button>
                                            </div>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    </div>
                </>
            }
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}