import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Articles from "../Articles/Articles.tsx";
import Contacts from "../Contacts/Contacts.tsx";

function Main() {
    return (
        <main className="main">
            <Hero />
            <Services />
            <Articles/>
            <Contacts />
        </main>
    )
}

export default Main