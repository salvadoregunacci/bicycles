import {useAppSelector} from "../../../hooks.ts";
import Container from "../../../components/Container.tsx";

const Features = () => {
    const productInfo = useAppSelector(state => state.shop.itemFullInfo);

    return (
        productInfo ?
            <section className="features">
                <Container className="features-container">
                    <h3>Характеристики</h3>
                    <ul className="features-list">
                        {
                            productInfo.features.map((item, index) => (
                                <li
                                    key={index}
                                    className="features__item"
                                >
                                    <div className="features__item-title t1">
                                        {item.title}
                                    </div>
                                    <div className="features__item-value sub-h3">
                                        {item.value}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </section>
            : null
    );
};

export default Features;