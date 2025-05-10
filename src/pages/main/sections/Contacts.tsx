import ContactsList from "../../../components/ContactsList.tsx";
import Container from "../../../components/Container.tsx";
import Map from "../../../components/Map.tsx";

const Contacts = () => {
    return (
        <section className="section section_contacts">
            <Container>
                <h2>Контакти</h2>
            </Container>
            <Map/>
            <ContactsList/>
        </section>
    );
};

export default Contacts;