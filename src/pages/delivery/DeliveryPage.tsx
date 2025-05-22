import Page from "../Page.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/delivery.scss";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Container from "../../components/Container.tsx";
import Block1 from "./sections/Block1.tsx";
import Block2 from "./sections/Block2.tsx";

const DeliveryPage = () => {
    return (
        <Page title="Доставка та оплата" className="delivery-page">
            <Header/>
            <SectionHeader title="Доставка та оплата" className="delivery-page__header">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Доставка та оплата</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Container>
                <Block1/>
                <Block2/>
            </Container>
            <Footer/>
        </Page>
    );
};

export default DeliveryPage;