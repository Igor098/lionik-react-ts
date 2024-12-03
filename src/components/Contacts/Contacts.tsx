import './Contacts.scss'
import {contactsData} from "../../assets/data.ts";
import ContactsCard from "../ContactsCard/ContactsCard";

const Contacts = () => {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <h2 className="contacts__title section-title ">Contacts</h2>
                <div className="contacts-wrapper grid">
                    {
                        contactsData.map(card => {
                            const {svgSrc, title, data, typeField} = card;
                            return (
                                <ContactsCard key={title} svgSrc={svgSrc} title={title} typeField={typeField} data={data} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Contacts;