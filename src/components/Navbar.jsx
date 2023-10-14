import {Link} from "react-router-dom";

export const Navbar = () => {
    return(
        <>
            <nav>
                <div className="navbar-links">
                    <img src="src/assets/logoipsum.png" alt="Logo"/>
                    <ul>
                        <li><Link to={""}>Solutions&nbsp;<i className="fa-solid fa-chevron-down"/></Link></li>
                        <li><Link to={""}>Features&nbsp;<i className="fa-solid fa-chevron-down"/></Link></li>
                        <li><Link to={""}>Blogs</Link></li>
                        <li><Link to={""}>About&nbsp;<i className="fa-solid fa-chevron-down"/></Link></li>
                    </ul>
                </div>
                <div className="navbar-buttons">
                    <button type="button" className="login-btn">Login</button>
                    <button type="button" className="reg-btn">Register</button>
                    <button type="button" className="ham-btn"><i className="fa-solid fa-bars"/></button>
                </div>
            </nav>
        </>
    )
}