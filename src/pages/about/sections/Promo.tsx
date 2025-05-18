import Container from "../../../components/Container.tsx";
import {Link} from "react-router-dom";

interface IPropsPromoCard {
    title: string,
    children: string,
    link: string,
}

const PromoCard = ({title, children, link}: IPropsPromoCard) => {
    return (
        <article className="promo-card">
            <h2 className="promo-card__title h2">{title}</h2>
            <p className="promo-card__desc t3">{children}</p>
            <Link to={link} className="promo-card__link t1">Детальніше</Link>
        </article>
    );
}

const Promo = () => {
    return (
        <section className="promo">
            <Container>
                <h1><em>Велосипед</em> - це не просто засіб пересування!</h1>
                <div className="promo__cards">
                    <PromoCard title="Зберігання" link="#">
                        Любиш кататися - люби і велосипед у квартирі на зиму паркувати або здавай до нас на зберігання
                        та
                        обслуговування.
                    </PromoCard>
                    <PromoCard title="Веломайстерня" link="#">
                        Якщо ви купили велосипед у нашому магазині, то можете не хвилюватися про налаштування і
                        перевірку,
                        оскільки ми це виконуємо в рамках передпродажної підготовки.
                    </PromoCard>
                    <PromoCard title="Гарантія" link="#">
                        Також, для зручності покупців, наш магазин допомагає (бере участь) у формуванні гарантійних
                        запитів
                        за всіма нижчепереліченими брендами. При будь-якому гарантійному випадку можна звертатися
                        безпосередньо до нас
                    </PromoCard>
                </div>
            </Container>
        </section>
    );
};

export default Promo;