import {HTMLAttributes, ReactNode} from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
}

const Container = ({
                       children,
                       className = "",
                       ...props
                   }: IProps) => {
    return (
        <div
            className={`container ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;