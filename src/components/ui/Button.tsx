import {ComponentPropsWithoutRef, ReactNode} from "react"
import {Link} from "react-router-dom";

export const enum ButtonVariants {
    Primary = "primary",
}

type Props = {
    variant?: ButtonVariants,
    link?: string,
    children: ReactNode,
}

const Button = ({children, link, className = "", variant = ButtonVariants.Primary}: ComponentPropsWithoutRef<"button"> & Props) => {
    return (
        link ?
            <Link to={link} className={`btn btn-action btn-${variant} ${className}`}>
                {children}
            </Link>
            :
            <button className={`btn btn-action btn-${variant} ${className}`}>
                {children}
            </button>
    );
};

export default Button;