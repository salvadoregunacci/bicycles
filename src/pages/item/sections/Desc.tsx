import Container from "../../../components/Container.tsx";

const Desc = () => {
    return (
        <section className="product-desc">
            <Container>
                <h3>Опис</h3>
                <p>
                    Професійний гоночний хардтейл для крос-кантрі рівня Чемпіонату та Кубка Світу. Одна з найлегших рам
                    серед гоночних хардтейлів для крос-кантрі. <dfn>Scott Scale 700 RC</dfn> - це рама з композитного волокна HMX,
                    перегонова трансмісія Sram XX1/X01 1×11, дискові гальма Shimano XTR M9000 і перегонові колеса
                    Syncros XR RC. Байк Ніно Шуртера для шорт-трек крос-кантрі.
                </p>
            </Container>
        </section>
    );
};

export default Desc;