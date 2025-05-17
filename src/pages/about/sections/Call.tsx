import Container from "../../../components/Container.tsx";

const Call = () => {
    return (
        <section className="call">
            <Container>
                <div className="call-form">
                    <h2>Залишилися питання?</h2>
                    <div className="call-form__subtitle sub-h">
                        Зателефонуйте нам за номером:
                    </div>
                    <a href="tel:380995675885" className="call-form__tel">+38 099-56-75-885</a>
                    <div className="call-form__desc t2">
                        Ми до ваших послуг! І, звичайно ж, приходьте в наш магазин, щоб подивитися товари наживо, особисто
                        оцінити якість і зробити правильний вибір!
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Call;