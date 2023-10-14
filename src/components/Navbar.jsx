import {Link} from "react-router-dom";

export const Navbar = () => {

    function toggleBigMenu(){
        let big = document.getElementById("bigMenu");

        if(big.classList.contains("active")){
            big.classList.remove("active");
            setTimeout(()=>{
                big.style.display = "none";
            },400)
        }
        else{
            big.style.display = "grid";
            setTimeout(()=>{
                big.classList.add("active");
            },50);
        }
    }

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
                    <button type="button" className="ham-btn" onClick={toggleBigMenu}><i className="fa-solid fa-bars"/></button>
                </div>
            </nav>
            <div className="bigMenu" id="bigMenu">
                <div className="close-btn" onClick={toggleBigMenu}>
                    <i className="fa-solid fa-x"/>
                </div>
                <ul>
                    <li><Link to={"/"}>Solutions</Link></li>
                    <li><Link to={"/"}>Features</Link></li>
                    <li><Link to={"/"}>Blogs</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><button type="button" className="login-btn">Login</button></li>
                    <li><button type="button" className="reg-btn">Register</button></li>
                </ul>
            </div>
        </>
    )
}