import './Header.scss'
import Logo from "../Logo.tsx";
import NavigationDesktop from "../Navigation/NavigationDesktop";
import Button from "../Button/Button";
import NavigationMobile from "../Navigation/NavigationMobile";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo />
                    <NavigationDesktop />
                    <Button text="Free trial"/>
                    <NavigationMobile />
                </div>
            </div>
        </header>
    )
}

export default Header