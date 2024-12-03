import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Articles from "../Articles/Articles";
import Contacts from "../Contacts/Contacts";
import Clients from "../Clients/Clients";

function Main() {
    return (
        <main className="main">
            <Hero />
            <Services />
            <Articles/>
            <Clients />
            <Contacts />
        </main>
    )
}

export default Main