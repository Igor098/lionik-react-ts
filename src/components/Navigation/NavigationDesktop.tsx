import './Navigation.scss'
import Link from "../Link/Link";

interface Links{
    title: string;
    href: string;
}
interface Props {
    links: Array<Links>;
}

const NavigationDesktop = ({ links }: Props) => {
    return (
        <nav className="nav lg-visible">
            <ul className={`nav__list list-reset`}>
                {links.map((route) => {
                    const {title, href} = route;
                    return (
                        <li key={title} className={`nav__item header-nav__item`}>
                            <Link text={title} href={ href } style={ "decor" } />
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default NavigationDesktop;