import Logo from "../Logo.tsx";
import FooterMenu from "../FooterMenu/FooterMenu.tsx";

const FooterDesktop = () => {
    return (
        <div className="desktop-visible">
            <div className="footer-wrapper container">
                <div className="footer-logo-wrapper">
                    <Logo/>
                    <span className="footer__copyright card-text">Copyright ©2017. All Right Reserved</span>
                </div>
                <FooterMenu/>
            </div>
        </div>
    )
}

export default FooterDesktop;