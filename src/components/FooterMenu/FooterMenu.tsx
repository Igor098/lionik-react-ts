import './FooterMenu.scss'
import { footerData } from '../../assets/data.ts';
import Social from "../Social/Social";
import FooterNavigation from "../FooterNavigation/FooterNavigation";

const FooterMenu = () => {
    return (
        <div className="footer-menu-wrapper">
            <FooterNavigation  links={footerData} />
            <Social />
        </div>
    )
}

export default FooterMenu;