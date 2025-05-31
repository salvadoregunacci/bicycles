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
import {createContext, Dispatch, SetStateAction, useRef, useState} from "react";

type CatalogContextType = {
    activeFilter: boolean;
    setActiveFilter: Dispatch<SetStateAction<boolean>>;
};

export const CatalogContext = createContext<CatalogContextType>({
    activeFilter: false,
    setActiveFilter: () => {},
});

const CatalogPage = () => {
    const [activeFilter, setActiveFilter] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (window.innerWidth <= 1200) {
            touchStartX.current = e.touches[0].clientX;
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (window.innerWidth > 1200) return;

        touchEndX.current = e.changedTouches[0].clientX;

        const delta = touchStartX.current! - touchEndX.current!;

        if (Math.abs(delta) < 50) return; // игнорируем мелкие движения

        if (delta > 0) {
            handleCloseFilter(); // свайп влево
        } else {
            handleOpenFilter(); // свайп вправо
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const handleCloseFilter = () => {
        setActiveFilter(false);
    };

    const handleOpenFilter = () => {
        setActiveFilter(true);
    };

    return (
        <Page title="Каталог" className="page_catalog">
            <Header/>
            <SectionHeader title="Гірські велосипеди" className="section-header_catalog">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem link="/catalog">Велосипеди</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Гірські велосипеди</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Container>
                <CatalogContext.Provider value={{activeFilter, setActiveFilter}}>
                    <div
                        className="catalog"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <UpBtn/>
                        <Filter/>
                        <Content/>
                    </div>
                </CatalogContext.Provider>
            </Container>
            <Footer/>
        </Page>
    );
};

export default CatalogPage;