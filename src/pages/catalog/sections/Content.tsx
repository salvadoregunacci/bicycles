import CatalogItems from "./CatalogItems.tsx";
import CatalogControls from "./CatalogControls.tsx";

const Content = () => {
    return (
        <section className="catalog-content">
            <CatalogControls/>
            <CatalogItems/>
        </section>
    );
};

export default Content;