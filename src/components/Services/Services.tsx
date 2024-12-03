import './Services.scss'
import { servicesData } from "../../assets/data.ts";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = ()=> {
    return (
        <section className="services" id="services">
            <div className="container">
                <h2 className="services__title section-title">Services</h2>
                <p className="services__desc section-text">Lionic guides you on making decisions for all aspects
                    of your end-of-life plans.</p>
                <div className="services-wrapper grid">
                    {
                        servicesData.map(card => {
                            const {svgSrc, title, description} = card;
                            return (
                                <ServiceCard key={title} svgSrc={svgSrc} title={title} description={description} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;