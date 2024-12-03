import './ClientCard.scss'

interface Props {
    imgSrc: string;
    comment: string;
    name: string;
    post: string;
}


const ClientCard = ({ imgSrc, comment, name, post}: Props) => {
    return (
        <article className="client-card">
            <p className="client-card__review-text card-text">{comment}</p>
            <div className="client-wrapper">
                <img className="client-card__logo" src={imgSrc} alt=""/>
                <div className="client-info">
                    <span className="client-card__name card-title">{name}</span>
                    <span className="client-card__job card-text">{post}</span>
                </div>
            </div>
        </article>
    )
}

export default ClientCard;