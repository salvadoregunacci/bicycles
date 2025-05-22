import Page from "../Page.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/storing.scss";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Info from "./sections/Info.tsx";
import Marquee from "../../components/Marquee.tsx";

const StoringPage = () => {
    return (
        <Page title="Зберігання" className="storing-page">
            <Header/>
            <SectionHeader title="Зберігання велосипеда" className="storing-page__header">
                <Breadcrumbs>
                    <BreadcrumbsItem link="#">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Зберігання велосипеда</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Info/>
            <Marquee/>
            <Footer/>
        </Page>
    );
};

export default StoringPage;