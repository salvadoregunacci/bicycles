import React from "react";


type Props<T extends React.ElementType> = {
    children: React.ReactNode,
    as?: T,
    variant?: "primary" | "secondary",
    className?: string,
} & React.ComponentPropsWithoutRef<T>


const Button = <T extends React.ElementType = "button">({
                                                            as,
                                                            children,
                                                            className = "",
                                                            variant = "primary",
                                                            ...props
                                                        }: Props<T>) => {
    const Component = as || "button";

    return (
        <Component
            className={`btn btn-action ${variant} ${className}`}
            {...props}
        >
            {children}
        </Component>
    )
}

export default Button;
