import Page from "../Page.tsx";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Promo from "./sections/Promo.tsx";

const CatalogPage = () => {
    return (
        <Page title="Каталог" className="page_catalog">
            <Header isFixed={true}/>
            <Promo/>
            <Footer/>
        </Page>
    );
};

export default CatalogPage;