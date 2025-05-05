import Page from "../Page.tsx";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import Container from "../../components/Container.tsx";
import Filter from "./sections/Filter.tsx";
import Content from "./sections/Content.tsx";
import UpBtn from "../../components/ui/UpBtn.tsx";
import "../../scss/pages/catalog.scss";

const CatalogPage = () => {
    return (
        <Page title="Каталог" className="page_catalog">
            <Header/>
            <SectionHeader title="Гірські велосипеди">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem link="/catalog">Велосипеди</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Гірські велосипеди</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Container>
                <div className="catalog">
                    <UpBtn/>
                    <Filter/>
                    <Content/>
                </div>
            </Container>
            <Footer/>
        </Page>
    );
};

export default CatalogPage;