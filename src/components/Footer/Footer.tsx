import './Footer.scss'

import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile.tsx";

const Footer = () => {
    return (
        <footer className="footer">
            <FooterDesktop />
            <FooterMobile />
        </footer>
)
}

export default Footer;