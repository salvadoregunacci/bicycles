import Page from "../Page.tsx";
import Header from "../../components/Header.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import Marquee from "../../components/Marquee.tsx";
import Footer from "../../components/Footer.tsx";
import "../../scss/pages/about.scss";
import Promo from "./sections/Promo.tsx";
import Desc from "./sections/Desc.tsx";
import Best from "./sections/Best.tsx";
import Brands from "./sections/Brands.tsx";
import Call from "./sections/Call.tsx";
import Team from "./sections/Team.tsx";
import Gallery from "./sections/Gallery.tsx";
import Contacts from "./sections/Contacts.tsx";

const AboutPage = () => {
    return (
        <Page title="Про нас" className="about-page">
            <Header/>
            <SectionHeader title="Про нас" className="section-header_about">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Про нас</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Promo/>
            <Desc/>
            <Best/>
            <Brands/>
            <Call/>
            <Team/>
            <Gallery/>
            <Contacts/>
            <Marquee/>
            <Footer/>
        </Page>
    );
};

export default AboutPage;