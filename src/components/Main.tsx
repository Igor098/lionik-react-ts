import Hero from "./Hero/Hero.tsx";
import Services from "./Services/Services.tsx";
import Articles from "./Articles/Articles.tsx";
import Contacts from "./Contacts/Contacts.tsx";
import Clients from "./Clients/Clients.tsx";

const Main = () => {
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