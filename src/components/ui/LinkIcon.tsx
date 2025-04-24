import React from "react"
import {Link} from "react-router-dom";

type Props = {
    to: string,
    children: React.JSX.Element,
    title?: string,
    includeNew?: boolean,
    className?: string,
}

const LinkIcon = ({children, to, includeNew = false, title = "", className = ""}: Props) => {
    return (
        <Link to={to} className={`link-icon ${className} ${includeNew ? "include-new" : ""}`} title={title}>
            {children}
        </Link>
    );
};

export default LinkIcon;