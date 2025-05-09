import {InputHTMLAttributes, ReactNode} from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode,
    className?: "",
}

const Radio = ({children, className = "", ...props}: IProps) => {
    return (
        <label className={`radio ${className}`}>
            <input
                className="radio-input"
                type="radio"
                hidden
                {...props}
            />
            <span className="radio-handler"></span>
            {
                children
                    ? <span className="radio-label t2">{children}</span>
                    : null
            }
        </label>
    );
};

export default Radio;