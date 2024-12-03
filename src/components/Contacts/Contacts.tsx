import './Contacts.scss'
import {contactsData} from "../../assets/data.ts";
import ContactsCard from "../ContactsCard/ContactsCard.tsx";

const Contacts = ()=> {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <h2 className="contacts__title section-title ">Contacts</h2>
                <div className="contacts-wrapper grid">
                    {
                        contactsData.map(card => {
                            const {svgSrc, title, data, type} = card;
                            return (
                                <>
                                    {
                                        type.includes("text")&&
                                        <ContactsCard key={title} svgSrc={svgSrc} title={title} type={type} data={data} />
                                    }
                                    {
                                        (type.includes("email") || type.includes("phone")) &&
                                        <ContactsCard key={title} svgSrc={svgSrc} title={title} type={type} data={data} />
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Contacts;