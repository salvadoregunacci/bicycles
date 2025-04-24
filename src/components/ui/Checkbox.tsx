import {InputHTMLAttributes, ReactNode} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    children?: ReactNode,
}

const Checkbox = ({children, className = "", ...props}: IProps) => {
    return (
        <label className={`checkbox ${className}`}>
            <input type="checkbox" hidden {...props}/>
            <span className="checkbox__box">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8L6 12.5L16 1.5" stroke="white" strokeWidth="2"/>
                </svg>
            </span>
            {
                children ?
                    <span className="checkbox__text t8">{children}</span>
                    :
                    null
            }
        </label>
    );
};

export default Checkbox;