import FooterMenu from "../FooterMenu/FooterMenu";
import Logo from "../Logo.tsx";


const FooterMobile = () => {
    return (
        <div className="mobile-visible">
            <div className="footer-wrapper container">
                <FooterMenu/>
                <Logo/>
            </div>
            <span className="footer__copyright footer__copyright_media card-text">Copyright ©2017. All Right Reserved</span>
        </div>

    )
}

export default FooterMobile;