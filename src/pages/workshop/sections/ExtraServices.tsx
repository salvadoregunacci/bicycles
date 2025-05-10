import Accordeon from "../../../components/Accordeon.tsx";
import {useAppSelector} from "../../../hooks.ts";
import Container from "../../../components/Container.tsx";

const ExtraServices = () => {
    const currency = useAppSelector(state => state.shop.currency);

    return (
        <section className="extra-services">
            <Container>
                <h3>Додаткові послуги</h3>
                <div className="extra-services__body">
                    <Accordeon title="Ремонт приводу">
                        <ul>
                            <li>
                                <div className="title t1">Натяг або заміна ланцюга</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Чистка та змащення трансмісії</div>
                                <div className="value sub-h3">200 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна касети</div>
                                <div className="value sub-h3">250 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна передніх зірок або шатунів</div>
                                <div className="value sub-h3">300 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна або регулювання переднього/заднього перемикача
                                    швидкостей
                                </div>
                                <div className="value sub-h3">350 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Повна діагностика та налаштування трансмісії</div>
                                <div className="value sub-h3">350 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                    <Accordeon title="Рульове управління">
                        <ul>
                            <li>
                                <div className="title t1">Регулювання керма та виносу</div>
                                <div className="value sub-h3">120 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна керма або виносу</div>
                                <div className="value sub-h3">200 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Чистка та змащення рульової колонки</div>
                                <div className="value sub-h3">180 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна рульової колонки (кермової чашки)</div>
                                <div className="value sub-h3">250 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Діагностика люфту та підшипників у рульовій системі</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                    <Accordeon title="Колеса">
                        <ul>
                            <li>
                                <div className="title t1">Вирівнювання (центрування) обода</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна камери або покришки</div>
                                <div className="value sub-h3">100 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Повне складання колеса (спиці, втулка, обід)</div>
                                <div className="value sub-h3">350 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Чистка і змащення втулки</div>
                                <div className="value sub-h3">130 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна підшипників у втулці</div>
                                <div className="value sub-h3">200 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                    <Accordeon title="Рама">
                        <ul>
                            <li>
                                <div className="title t1">Очищення та полірування рами</div>
                                <div className="value sub-h3">120 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Вирівнювання погнутої рами</div>
                                <div className="value sub-h3">400 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Підфарбовування подряпин</div>
                                <div className="value sub-h3">250 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна або встановлення петлі/гаків</div>
                                <div className="value sub-h3">180 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Діагностика тріщин та дефектів рами</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                    <Accordeon title="Вилка">
                        <ul>
                            <li>
                                <div className="title t1">Діагностика вилки (амортизаційної або жорсткої)</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна або встановлення вилки</div>
                                <div className="value sub-h3">300 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Чистка та мастило амортизаційної вилки</div>
                                <div className="value sub-h3">250 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Регулювання жорсткості/відскоку вилки</div>
                                <div className="value sub-h3">200 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Заміна сальників або пильників</div>
                                <div className="value sub-h3">350 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                    <Accordeon title="Додаткове обладнання (аксесуари)">
                        <ul>
                            <li>
                                <div className="title t1">Встановлення багажника</div>
                                <div className="value sub-h3">150 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Монтаж переднього/заднього світла</div>
                                <div className="value sub-h3">100 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Встановлення крил (комплект)</div>
                                <div className="value sub-h3">120 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Монтаж дзвіночка або сигналу</div>
                                <div className="value sub-h3">70 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Встановлення тримача для замка або фляги</div>
                                <div className="value sub-h3">80 {currency}</div>
                            </li>
                            <li>
                                <div className="title t1">Монтаж дитячого велокрісла</div>
                                <div className="value sub-h3">200 {currency}</div>
                            </li>
                        </ul>
                    </Accordeon>
                </div>
            </Container>
        </section>
    );
};

export default ExtraServices;