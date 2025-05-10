import Header from "../../components/Header.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import Marquee from "../../components/Marquee.tsx";
import Footer from "../../components/Footer.tsx";
import Page from "../Page.tsx";
import "../../scss/pages/workshop.scss";
import BasicServices from "./sections/BasicServices.tsx";
import ExtraServices from "./sections/ExtraServices.tsx";

const WorkshopPage = () => {
    return (
        <Page title="Веломайстерня" className="workshop-page">
            <Header/>
            <SectionHeader title="Веломайстерня" className="section-header_wrokshop">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Веломайстерня</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <BasicServices/>
            <ExtraServices/>
            <Marquee/>
            <Footer/>
        </Page>
    );
};

export default WorkshopPage;