import Container from "../../../components/Container.tsx";

const Best = () => {
    return (
        <section className="best">
            <Container>
                <h2>ми зібрали для вас найкраще з велосипедного світу</h2>
                <div className="row t2">
                    <p>
                        World-Bike спеціалізується на продажу та обслуговуванні велосипедів, запчастин, аксесуарів для
                        них
                        та екіпіровки
                    </p>
                    <p>
                        Ми знаємо ціну якості. Тому в World-Bike тільки якісні преміальні товари за відповідними цінами.
                        А під замовлення ми зберемо для вас кастомний велосипед з унікальним дизайном і технічними
                        характеристиками!
                    </p>
                </div>
            </Container>
            <picture>
                <source srcSet="/images/about/best/bg@1x.avif 1x, /images/about/best/bg@2x.avif 2x" type="image/avif"/>
                <img className="best-bg" src="/images/about/best/bg@1x.webp" srcSet="/images/about/best/bg@2x.webp 2x" alt="bg"/>
            </picture>
        </section>
    );
};

export default Best;