import Container from "./Container.tsx";

const ContactsInfo = () => {
    return (
        <section className="contacts-info">
            <Container>
                <div className="info-wrap">
                    <div className="info-block">
                        <h4 className="info-title sub-h2">Адреса магазину:</h4>
                        <ul className="info-list t3">
                            <li>
                                <address>Україна, м.Київ, вул.Алмазова, буд.45</address>
                            </li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <h4 className="info-title sub-h2">Графік роботи:</h4>
                        <ul className="info-list t3">
                            <li>Понеділок - Неділля з <time>10:00</time> до <time>20:00</time> години</li>
                            <li className="upper-case">Без вихідних</li>
                        </ul>
                    </div>
                    <div className="info-block">
                        <h4 className="info-title sub-h2">Телефони:</h4>
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
                        <h4 className="info-title sub-h2">E-mail:</h4>
                        <ul className="info-list t3">
                            <li>
                                <a href="mailto:order@world-bike.ua"><cite>order@world-bike.ua</cite> — замовлення</a>
                            </li>
                            <li>
                                <a href="mailto:info@world-bike.ua"><cite>info@world-bike.ua</cite> — інформація</a>
                            </li>
                            <li>
                                <a href="mailto:opt@world-bike.ua"><cite>opt@world-bike.ua</cite> — опт</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info-wrap">
                    <h4 className="info-title sub-h2">Юридична інформація:</h4>
                    <ul className="info-details">
                        <li className="t3">
                            <span className="title">Назва:</span>
                            <span className="value upper-case">
                                <abbr title="Фізична особо підприємець" lang="uk">фоп</abbr> петренко владислав васильович
                            </span>
                        </li>
                        <li className="t3">
                            <span className="title">
                                <abbr title="Реєстраційний номер облікової картки платника податків"
                                      lang="uk">РНОКПП</abbr>:
                            </span>
                            <strong className="value">402063939455</strong>
                        </li>
                        <li className="t3">
                            <span className="title">
                                <abbr title="Єдиний державний реєстр підприємств та організацій України"
                                      lang="uk">ЄДРПОУ</abbr>:
                            </span>
                            <strong className="value">14360570</strong>
                        </li>
                        <li className="t3">
                            <span className="title">Фактична адреса:</span>
                            <address className="value">Україна, м.Київ, вул.Алмазова, буд.45</address>
                        </li>
                        <li className="t3">
                            <span className="title">Юридична адреса:</span>
                            <address className="value">Україна, м.Київ, вул.Алмазова, буд.45</address>
                        </li>
                        <li className="t3">
                            <span className="title">Розрахунковий рахунок:</span>
                            <strong className="value">UA123456789012345678901234567</strong>
                        </li>
                        <li className="t3">
                            <span className="title">Банк:</span>
                            <strong className="value">ПриватБанк</strong>
                        </li>
                        <li className="t3">
                            <span className="title">Кореспондентський рахунок:</span>
                            <strong className="value">32009100000026</strong>
                        </li>
                        <li className="t3">
                            <span className="title">SWIFT-код:</span>
                            <strong className="value">PBANUA2X</strong>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default ContactsInfo;