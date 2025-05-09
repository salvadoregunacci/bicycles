import {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    error?: string | undefined,
}

const Input = ({className = "", error, ...props}: IProps) => {
    return (
        <div className={`input-wrap ${error ? "_error" : ""} ${className}`}>
            <input className={`input t2`} {...props}/>
            {
                error
                    ? <span className="input-error">{error}</span>
                    : null
            }
        </div>
    );
};

export default Input;