import './Link.scss'

interface Props {
    text: string;
    style: string;
    href: string;
}


function Link({text, style, href} : Props): JSX.Element {
    const classes = style === 'bold' && 'nav__link_weight_bold'
    return (
        <a href={href} className={`nav__link header-nav__link link-text ${classes}`}>{text}</a>
    );
}

export default Link;