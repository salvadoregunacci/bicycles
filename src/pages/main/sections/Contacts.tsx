import ContactsList from "../../../components/ContactsList.tsx";
import Container from "../../../components/Container.tsx";

const Contacts = () => {
    return (
        <section className="section section_contacts">
            <Container>
                <h2>Контакти</h2>
            </Container>
            <picture>
                <source
                    srcSet="/images/main/map/bg@1x.avif, /images/main/map/bg@2x.avif 2x"
                    type="image/avif"
                />
                <img
                    src="/images/main/map/bg@1x.webp"
                    srcSet="/images/main/map/bg@2x.webp"
                    alt="map"
                    className="map-bg"
                />
            </picture>
            <ContactsList/>
        </section>
    );
};

export default Contacts;