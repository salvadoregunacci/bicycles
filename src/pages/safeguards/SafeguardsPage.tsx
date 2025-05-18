import Page from "../Page.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/safeguards.scss";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Container from "../../components/Container.tsx";
import Desc from "./sections/Desc.tsx";
import Tables from "./sections/Tables.tsx";
import Requirements from "./sections/Requirements.tsx";
import Exceptions from "./sections/Exceptions.tsx";
import Marquee from "../../components/Marquee.tsx";

const SafeguardsPage = () => {
    return (
        <Page title="Гарантії" className="safeguards-page">
            <Header/>
            <SectionHeader title="Гарантії" className="section-header_safeguards">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Гарантії</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Container>
                <Desc/>
                <Tables/>
                <Requirements/>
                <Exceptions/>
            </Container>
            <Marquee/>
            <Footer/>
        </Page>
    );
};

export default SafeguardsPage;