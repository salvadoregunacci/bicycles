import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Page from "../Page.tsx";
import Map from "../../components/Map.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/contacts.scss";
import Info from "./sections/Info.tsx";
import ContactForm from "./sections/ContactForm.tsx";
import Questions from "./sections/Questions.tsx";

const ContactsPage = () => {
    return (
        <Page title="Контакти" className="contacts-page">
            <Header/>
            <SectionHeader title="Контакти" className="section-header_contacts">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Контакти</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Info/>
            <ContactForm/>
            <Questions/>
            <Map/>
            <Footer/>
        </Page>
    );
};

export default ContactsPage;