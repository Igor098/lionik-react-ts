import './Link.scss'

interface Props {
    text: string;
    style: string;
    href: string;
}


const Link = ({text, style, href} : Props) => {
    const classes = style.includes('decor') ? 'header-nav__link' : '';
    return (
        <a href={href} className={`nav__link link-text ${classes}`}>{text}</a>
    );
}

export default Link;