import Container from "./Container.tsx";
import Logo from "./ui/Logo.tsx";
import {Link} from "react-router-dom";
import {useAppSelector} from "../hooks.ts";
import Mailing from "../pages/main/sections/Mailing.tsx";

const Footer = () => {
    const {
        telephone,
        address: {
            city,
            street1,
            street2,
        },
        email,
    } = useAppSelector(state => state.general.contacts);

    return (
        <>
            <Mailing/>
            <footer className="footer">
                <Container>
                    <div className="footer-cols">
                        <div className="footer-col footer-col_1">
                            <Logo/>
                            <p className="footer__company-desc t3">
                                Компанія World-bikes спеціалізується на продажу товарів для велосипедного спорту.
                            </p>
                        </div>
                        <div className="footer-col footer-col_2">
                            <nav className="footer-list">
                                <div className="footer-list__title">Каталог</div>
                                <ul>
                                    <li className="t3">
                                        <Link to="#">Trade-in</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Велосипеди</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Екіпірування</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Запчастини</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Велостанки</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Аксесуари</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-col">
                            <nav className="footer-list">
                                <div className="footer-list__title">Для клієнта</div>
                                <ul>
                                    <li className="t3">
                                        <Link to="#">Про нас</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Доставка та оплата</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Блог</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Контакти</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Веломайстерня</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Зберігання</Link>
                                    </li>
                                    <li className="t3">
                                        <Link to="#">Гарантії</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-col footer-col_contacts">
                            <nav className="footer-list">
                                <div className="footer-list__title">Контакти</div>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22.3333 4H11.6667C10.1939 4 9 5.19391 9 6.66667V25.3333C9 26.8061 10.1939 28 11.6667 28H22.3333C23.8061 28 25 26.8061 25 25.3333V6.66667C25 5.19391 23.8061 4 22.3333 4Z"
                                                    stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path d="M17 24.0133V24" stroke="#4C4C4C" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <a href={`tel:+${telephone.replace(/\D/g, "")}`} className="footer-contact">
                                            {telephone}
                                        </a>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1926_501)">
                                                    <path
                                                        d="M21.4038 29.8148L24.6542 5.51823L5.23796 20.4815L15.3209 21.684L21.4038 29.8148Z"
                                                        stroke="#4C4C4C"
                                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1926_501">
                                                        <rect width="32" height="32" fill="white"
                                                              transform="translate(0.666504)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span className="footer-contact">
                                        <span>{city}</span>
                                        <span>{street1}, {street2}</span>
                                    </span>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M27.6667 6.66699H6.33333C5.96515 6.66699 5.63181 6.81623 5.39052 7.05751C5.14924 7.29881 5 7.63214 5 8.00033V24.0003C5 24.7367 5.59696 25.3337 6.33333 25.3337H27.6667C28.4031 25.3337 29 24.7367 29 24.0003V8.00033C29 7.63214 28.8508 7.29881 28.6095 7.05751C28.3681 6.81623 28.0348 6.66699 27.6667 6.66699Z"
                                                    stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M5.39062 7.05762L15.1145 16.7814C16.1558 17.8229 17.8444 17.8229 18.8857 16.7814L28.6096 7.05762"
                                                    stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <a href={`mailto:${email}`}>
                                            {email}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer-desc t4">
                        <div className="footer-copyright">© 2023 world bike</div>
                        <a href="#" target="_blank">Пользовательское соглашение</a>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;