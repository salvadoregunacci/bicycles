import Container from "../../../components/Container.tsx";
import Map from "../../../components/Map.tsx";
import ContactsInfo from "../../../components/ContactsInfo.tsx";

const Contacts = () => {
    return (
        <section className="contacts">
            <Container>
                <h2>Контакти</h2>
            </Container>
            <Map/>
            <ContactsInfo/>
        </section>
    );
};

export default Contacts;