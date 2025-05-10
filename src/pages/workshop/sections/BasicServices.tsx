import {useAppSelector} from "../../../hooks.ts";
import Container from "../../../components/Container.tsx";

const BasicServices = () => {
    const currency = useAppSelector(state => state.shop.currency);

    return (
        <section className="basic-services">
            <Container>
                <h3>Вартість основних послуг</h3>
                <div className="wrap">
                    <div className="block">
                        <div className="row">
                            <div className="title t1">Діагностика:</div>
                            <div className="value sub-h3">Безкоштовно</div>
                        </div>
                        <div className="row">
                            <div className="title t1">Техобслуговування:</div>
                            <div className="value sub-h3">1200 {currency}</div>
                        </div>
                        <div className="row">
                            <div className="title t1">Мийка:</div>
                            <div className="value sub-h3">400</div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="row">
                            <div className="title t1">Комплексне тех. обслуговування:</div>
                            <div className="value sub-h3">2500 {currency}</div>
                        </div>
                        <div className="row">
                            <div className="title t1">Індивідуальна збірка велосипеда:</div>
                            <div className="value sub-h3">3500 {currency}</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BasicServices;