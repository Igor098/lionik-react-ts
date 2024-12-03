import './Navigation.scss'
import { headerData } from '../../assets/data.ts';
import Link from "../Link/Link";

function NavigationDesktop() {
    return (
        <nav className="nav lg-visible">
            <ul className="nav__list list-reset">
                {headerData.map((route) => {
                    const {title, href} = route;
                    return (
                        <li key={title} className='nav__item header-nav__item'>
                            <Link text={title} href={href} style='bold'></Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default NavigationDesktop