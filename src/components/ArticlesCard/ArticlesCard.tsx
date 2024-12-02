import './ArticlesCard.scss'


interface Prop {
    imgSrc: string;
    title: string;
    description: string;
    dateTime: string;
    textDateTime:string;
}

const ArticlesCard = ({imgSrc, title, description,dateTime,textDateTime}: Prop) => {
    return (
        <article className="article-card">
            <div className="article__img-wrapper">
                <img className="article__img" src={imgSrc} alt={title}/>
            </div>

            <div className="article-wrapper">
                <time className="article-card__date" dateTime={dateTime}>{textDateTime}</time>
                <h3 className="article-card__title card-title">{title}</h3>
                <p className="article-card__desc card-text">{description}</p>
            </div>
            <a className="article-card__link" href="https://ru.bem.info/methodology/quick-start/"></a>
        </article>
    )
}
export default ArticlesCard;