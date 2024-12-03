import './Header.scss'
import { headerData } from '../../assets/data.ts'
import Logo from "../Logo.tsx";
import NavigationDesktop from "../Navigation/NavigationDesktop";
import Button from "../Button/Button";
import NavigationMobile from "../Navigation/NavigationMobile";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Logo />
                    <NavigationDesktop links={headerData} />
                    <Button text="Free trial" style={''}/>
                    <NavigationMobile />
                </div>
            </div>
        </header>
    )
}

export default Header