import Container from "./Container.tsx";
import {HTMLAttributes, ReactNode} from "react";

interface IProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    title: string,
    className?: string,
}

const SectionHeader = ({title, children, className = "", ...props}: IProps) => {
    return (
        <section
            className={`section-header section-header_catalog ${className}`}
            {...props}
        >
            <Container>
                {children}
                <h2 className="section-header__title">{title}</h2>
            </Container>
        </section>
    );
};

export default SectionHeader;