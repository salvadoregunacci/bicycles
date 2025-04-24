import {HTMLAttributes} from "react";

interface IProps extends HTMLAttributes<HTMLElement> {
    className?: string,
}

const Breadcrumbs = ({className = "", ...props}: IProps) => {
    return (
        <nav
            className={`${className} breadcrumbs`}
            {...props}
        >

        </nav>
    );
};

export default Breadcrumbs;