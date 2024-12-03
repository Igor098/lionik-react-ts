import {clientsData} from "../../assets/data.ts";
import './Clients.scss'
import ClientCard from "../ClientCard/ClientCard";

const Clients = () => {
    return (
        <section className="clients" id="clients">
            <div className="container">
                <h2 className="clients__title section-title">Clients</h2>
                <div className="clients-wrapper grid">
                    {clientsData.map(card => {
                        const { imgSrc, comment, name, post } = card;
                        return (
                            <ClientCard key={name} imgSrc={imgSrc} comment={comment} name={name} post={post} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Clients;