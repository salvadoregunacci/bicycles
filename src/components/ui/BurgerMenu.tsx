import {
    ComponentPropsWithoutRef,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useEffect,
    useState
} from "react";
import {Link} from "react-router-dom";
import CloseBtn from "./CloseBtn.tsx";

type BurgerContentProps = {
    children: ReactNode,
    onOverClick: MouseEventHandler<HTMLDivElement>
};

const BurgerTrigger = ({onClick}: ComponentPropsWithoutRef<"button">) => {
    return (
        <button className="btn burger-menu__trigger" onClick={onClick} title="Меню">
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

const BurgerContent = ({children, onOverClick}: BurgerContentProps) => {
    return (
        <>
            <div className="burger-menu__overlay" onClick={onOverClick}></div>
            <div className="burger-menu__content">
                {children}
            </div>
        </>
    );
};


const BurgerMenu = () => {
    const [active, setActive] = useState(false);

    const handleKeydown = useCallback((e: KeyboardEvent) => {
        if (e.code === "Escape") {
            setActive(false);
        }
    }, []);

    useEffect(() => {
        if (active) {
            document.addEventListener("keydown", handleKeydown);
        } else {
            document.removeEventListener("keydown", handleKeydown);
        }
    }, [active]);

    const handleClickTrigger: MouseEventHandler<HTMLButtonElement> = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    const handleClickClose: MouseEventHandler<HTMLButtonElement> = () => {
        setActive(false);
    }

    const handleOverClick: MouseEventHandler<HTMLDivElement> = () => {
        setActive(false);
    }

    return (
        <div className={`burger-menu ${active ? "active" : ""}`}>
            <BurgerTrigger onClick={handleClickTrigger}/>
            <BurgerContent onOverClick={handleOverClick}>
                <h3>Додат. інформація</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about" className="sub-h2">Про нас</Link>
                        </li>
                        <li>
                            <Link to="/workshop" className="sub-h2">Веломайстерня</Link>
                        </li>
                        <li>
                            <Link to="/storing" className="sub-h2">Зберігання</Link>
                        </li>
                        <li>
                            <Link to="/safeguards" className="sub-h2">Гарантії</Link>
                        </li>
                        <li>
                            <Link to="/agreement" className="sub-h2">Угода користувача</Link>
                        </li>
                        <li>
                            <Link to="#" className="sub-h2">Доставка та оплата</Link>
                        </li>
                        <li>
                            <Link to="#" className="sub-h2">Блог</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="sub-h2">Контакти</Link>
                        </li>
                    </ul>
                </nav>
                <CloseBtn onClick={handleClickClose} className="burger-menu__close-btn"/>
            </BurgerContent>
        </div>
    );
};

export default BurgerMenu;