import {Navbar} from "../components/Navbar.jsx";
import {Footer} from "../components/Footer.jsx";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Search = () => {

    //Location
    const {state} = useLocation();

    //states
    const [data, setData] = useState([]);

    //getResults
    function getResults() {
        axios.get(`https://mcs-server-k4q6.onrender.com/get-results?name=${state}`)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Fetch Results
    useEffect(() => {
        getResults();
    }, [])

    return (
        <>
            {/*Header*/}
            <Navbar/>
            {/*Header End*/}
            <div className="search-page">
                <div className="search-head">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span>Search Results for <span className="highlight">"{state}"</span></span>
                </div>
                <div className="search-flex">
                    {
                        data.map(((value, index) => {
                            return (
                                <Link to={"/partner"} state={value.id} className="flex-item" key={index}>
                                    <img src={value.image} alt={value.name}/>
                                    <div className="flex-text">
                                        <span className="name">{value.name}</span>
                                        <span className="intro">{value.intro}</span>
                                        <span className="reviews"><span className="rev-col"><i className="fa-solid fa-star"/> {value.rating}</span> ({value.reviewCount})</span>
                                    </div>
                                </Link>
                            )
                        }))
                    }
                </div>
            </div>
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}