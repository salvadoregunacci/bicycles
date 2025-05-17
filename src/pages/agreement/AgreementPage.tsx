import Page from "../Page.tsx";
import Container from "../../components/Container.tsx";
import "../../scss/pages/agreement.scss";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import Header from "../../components/Header.tsx";
import Content from "./sections/Content.tsx";
import Footer from "../../components/Footer.tsx";
import UpBtn from "../../components/ui/UpBtn.tsx";
import Marquee from "../../components/Marquee.tsx";

const AgreementPage = () => {
    return (
        <Page className="agreement-page" title="Угода користувача">
            <UpBtn/>
            <Header/>
            <Container className="agreement-page__container">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Угода користувача</BreadcrumbsItem>
                </Breadcrumbs>
                <Content/>
            </Container>
            <Marquee/>
            <Footer/>
        </Page>
    );
};

export default AgreementPage;