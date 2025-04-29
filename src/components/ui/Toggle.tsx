import {InputHTMLAttributes} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

const Toggle = ({className = "", ...props}: IProps) => {
    return (
        <label className={`toggle ${className}`}>
            <input type="checkbox" {...props} hidden/>
            <span className="toggle__body">
                <span className="toggle__handler"></span>
            </span>
        </label>
    );
};

export default Toggle;