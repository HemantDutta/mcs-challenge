export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-logo">
                    <img src="src/assets/logoipsum_white.png" alt=""/>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span>India's first platform dedicated to simplifying partner search</span>
                </div>
                <div className="footer-links">
                    <ul className="link-list">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    <ul className="link-list">
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Connect</a></li>
                        <li><a href="#">Research</a></li>
                        <li><a href="#">Academy</a></li>
                    </ul>
                    <ul className="link-list">
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Forms</a></li>
                    </ul>
                    <ul className="link-list">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <ul className="link-list">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <span className="address">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</span>
                    <div className="socials">
                        <a href="#"><i className="fa-brands fa-facebook"/></a>
                        <a href="#"><i className="fa-brands fa-instagram"/></a>
                        <a href="#"><i className="fa-brands fa-linkedin"/></a>
                        <a href="#"><i className="fa-brands fa-whatsapp"/></a>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <span>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</span>
            </div>
        </>
    )
}