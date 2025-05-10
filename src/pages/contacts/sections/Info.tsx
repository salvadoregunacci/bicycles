import Container from "../../../components/Container.tsx";

const Info = () => {
    return (
        <section className="info">
            <Container>
                <div className="info-wrap">
                    <div className="info-block">
                        <div className="info-title sub-h2">Адреса магазину:</div>
                        <ul className="info-list t3">
                            <li>Україна, м.Київ, вул.Алмазова, буд.45</li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <div className="info-title sub-h2">Графік роботи:</div>
                        <ul className="info-list t3">
                            <li>Понеділок - Неділля з 10:00 до 20:00 години</li>
                            <li className="upper-case">Без вихідних</li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <div className="info-title sub-h2">Телефони:</div>
                        <ul className="info-list t3">
                            <li>
                                <a href="tel:380995675885">+38 099-56-75-885</a>
                            </li>
                            <li>
                                <a href="tel:380995660549">+38 099-56-60-549</a>
                            </li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <div className="info-title sub-h2">E-mail:</div>
                        <ul className="info-list t3">
                            <li>
                                <a href="mailto:order@world-bike.ua">order@world-bike.ua — замовлення</a>
                            </li>
                            <li>
                                <a href="mailto:info@world-bike.ua">info@world-bike.ua — інформація</a>
                            </li>
                            <li>
                                <a href="mailto:opt@world-bike.ua">opt@world-bike.ua — опт</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info-wrap">
                    <div className="info-title sub-h2">Юридична інформація:</div>
                    <ul className="info-details">
                        <li className="t3">
                            <div className="title">Назва:</div>
                            <div className="value upper-case">фоп петренко владислав васильович</div>
                        </li>
                        <li className="t3">
                            <div className="title">РНОКПП:</div>
                            <div className="value">402063939455</div>
                        </li>
                        <li className="t3">
                            <div className="title">ЄДРПОУ:</div>
                            <div className="value">14360570</div>
                        </li>
                        <li className="t3">
                            <div className="title">Фактична адреса:</div>
                            <div className="value">Україна, м.Київ, вул.Алмазова, буд.45</div>
                        </li>
                        <li className="t3">
                            <div className="title">Юридична адреса:</div>
                            <div className="value">Україна, м.Київ, вул.Алмазова, буд.45</div>
                        </li>
                        <li className="t3">
                            <div className="title">Розрахунковий рахунок:</div>
                            <div className="value">UA123456789012345678901234567</div>
                        </li>
                        <li className="t3">
                            <div className="title">Банк:</div>
                            <div className="value">КБ "ПриватБанк"</div>
                        </li>
                        <li className="t3">
                            <div className="title">Кореспондентський рахунок:</div>
                            <div className="value"> 32009100000026</div>
                        </li>
                        <li className="t3">
                            <div className="title">BIC:</div>
                            <div className="value">PBANUA2X</div>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Info;