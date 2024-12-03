import './ServiceCard.scss'
import { ReactSVG } from 'react-svg';

interface Prop {
    svgSrc: string;
    title: string;
    description: string;
}

const ServiceCard = ({svgSrc, title, description}: Prop) => {
    return (
        <article className="services-card">
            <ReactSVG
                src={svgSrc}
                className="contact-card__img"
            />
            <h3 className="services-card__title title-text">{title}</h3>
            <p className="services-card__desc text">{description}</p>
            <a className="services-card__link" href="https://learn.javascript.ru/"></a>
        </article>
    )
}

export default ServiceCard;