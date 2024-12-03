import Link from "../Link/Link";

interface Links{
    title: string;
    href: string;
}
interface Props {
    links: Array<Links>;
}

const FooterNavigation = ({ links }: Props) => {
    return (
        <nav className="footer-nav">
            <ul className={`footer-nav__list list-reset`}>
                {links.map((route) => {
                    const {title, href} = route;
                    return (
                        <li key={title} className={`footer-nav__item`}>
                            <Link text={title} href={href} style=""></Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default FooterNavigation;