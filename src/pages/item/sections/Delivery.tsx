import Container from "../../../components/Container.tsx";

const Delivery = () => {
    return (
        <section className="delivery">
            <Container>
                <h3>Доставка</h3>
                <div className="delivery-banner">
                    <picture>
                        <source
                            type="image/avif"
                            srcSet="
                                /images/item_page/delivery_banner@1x.avif 1x,
                                /images/item_page/delivery_banner@2x.avif 2x
                            "
                        />
                        <img
                            src="/images/item_page/delivery_banner@1x.webp"
                            srcSet="/images/item_page/delivery_banner@2x.webp"
                            alt="delivery banner"
                        />
                    </picture>
                </div>
                <div className="delivery__subtitle sub-h">
                    Для зручності покупців діє кілька способів доставки товарів
                </div>
                <ul className="delivery__list">
                    <li>Доставка по Києву</li>
                    <li>Доставка по Київській області</li>
                    <li>Доставка в інші регіони України</li>
                </ul>
                <div className="delivery__important t3">
                    Будь-який із способів доступний під час оформлення замовлення через сайт або в операторів
                </div>
                <div className="delivery__text">
                    Велосипеди та вело-станки доставляються в зібраному і налаштованому вигляді.
                </div>
                <div className="delivery__text">
                    На будь-які питання щодо правил і вартості доставки дадуть відповідь оператор:
                    <a href="tel:380995675885">+38 099-56-75-885</a>
                </div>
                <b className="sub-h2">Для будь-якого замовлення можливий самовивіз із магазину</b>
            </Container>
        </section>
    );
};

export default Delivery;