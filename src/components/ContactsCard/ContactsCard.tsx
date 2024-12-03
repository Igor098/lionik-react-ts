import './ContactsCard.scss'
import {ReactSVG} from "react-svg";

interface Data{
    text:string;
    href:string;

}

interface Prop {
    svgSrc: string;
    title: string;
    type: string;
    data: Array<Data>;
}


const ContactsCard = ({svgSrc, title, type, data}: Prop) => {
    return (
        <article className="contact-card">
            <div className="contact-card__wrapper">
                <ReactSVG
                    src={svgSrc}
                    className="contact-card__img"
                />
                <h3 className="contact-card__title title-text">{title}</h3>

                {
                    type.includes("text") &&
                    data.map(element => {
                        return (
                            <p key={element.text} className="contact-card__desc card-text">{element.text}</p>
                        )
                    }
                    )
                }

                {
                    type.includes("phone") &&
                    data.map(el => {
                         return (
                             <a key={el.text} className="contact-card__text card-text" href={el.href}> {el.text}</a>

                         )
                    })
                }

                {
                    type.includes("email") &&
                    data.map(el => {
                        return (
                            <a key={el.text} className="contact-card__text card-text" href={el.href}> {el.text}</a>

                        )
                    })
                }
            </div>
        </article>
    )
}
export default ContactsCard;