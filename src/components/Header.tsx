import Logo from "./ui/Logo.tsx";
import NavBar from "./NavBar.tsx";
import HeaderControls from "./HeaderControls.tsx";
import BurgerMenu from "./ui/BurgerMenu.tsx";
import {HTMLAttributes, useCallback, useEffect, useState} from "react";
import Container from "./Container.tsx";

interface IProps extends HTMLAttributes<HTMLElement> {
    isSticky?: boolean,
}

const Header = ({isSticky = false, ...props}: IProps) => {
    const [colorizeVariant, setColorizeVariant] = useState(false);

    const handleScroll = useCallback(() => {
        setColorizeVariant(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header
            className={`header ${isSticky ? "is-sticky" : ""} ${isSticky || colorizeVariant ? "colorize" : ""}`}
            {...props}
        >
            <Container>
                <Logo/>
                <NavBar/>
                <HeaderControls/>
                <BurgerMenu/>
            </Container>
        </header>
    );
};

export default Header;