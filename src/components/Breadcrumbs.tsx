import React, {HTMLAttributes, ReactNode} from "react";
import {Link} from "react-router-dom";

interface IBreadcrumbsProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode,
    className?: string,
    separator?: string,
}

interface IBreadcrumbsItemProps {
    children: ReactNode,
    link?: string,
    isActive?: boolean,
}

export const BreadcrumbsItem = ({
                                    children,
                                    link = "#",
                                    isActive = false
                                }: IBreadcrumbsItemProps) => {
    return (
        <Link
            to={link}
            className={`breadcrumbs-item ${isActive ? "_current" : ""}`}
        >
            {children}
        </Link>
    );
}

const Breadcrumbs = ({
                         children,
                         className = "",
                         separator = "/",
                         ...props
                     }: IBreadcrumbsProps) => {
    return (
        <nav
            className={`${className} breadcrumbs`}
            {...props}
        >
            {
                React.Children.toArray(children).map((child, index, arr) => (
                    <React.Fragment key={index}>
                        {child}
                        {
                            index !== (arr.length - 1) ?
                                <span className="delimetr">/</span>
                                : null
                        }
                    </React.Fragment>
                ))
            }
        </nav>
    );
};

export default Breadcrumbs;