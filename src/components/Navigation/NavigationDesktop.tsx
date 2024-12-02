import './Navigation.scss'
import {data} from '../../assets/data.ts'
import Link from "../Link/Link";

function NavigationDesktop() {
    return (
        <nav className="nav lg-visible">
            <ul className="nav__list list-reset">
                {data.map((route) => {
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