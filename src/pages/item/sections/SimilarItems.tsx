import ItemsSection from "../../../components/ItemsSection.tsx";
import {useAppSelector} from "../../../hooks.ts";

const SimilarItems = () => {
    const productInfo = useAppSelector(state => state.shop.itemFullInfo);

    return (
        productInfo && productInfo.similarItems?.length ?
            <section className="similar-items">
                <ItemsSection
                    items={productInfo.similarItems}
                    title="Схожі товари"
                />
            </section>
            : null
    );
};

export default SimilarItems;