import './Articles.scss'
import {articlesData} from "../../assets/data.ts";
import ArticlesCard from "../ArticlesCard/ArticlesCard";

const Articles = ()=> {
    return (
        <section className="articles " id="articles">
            <div className="container">
                <h2 className="articles__title section-title">Articles</h2>
                <div className="articles-wrapper grid">
                    {
                        articlesData.map(card => {
                            const {imgSrc, title, description, dateTime, textDateTime } = card;
                            return (
                                <ArticlesCard key={title} imgSrc={imgSrc} title={title} description={description}
                                              dateTime={dateTime} textDateTime={textDateTime} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Articles;