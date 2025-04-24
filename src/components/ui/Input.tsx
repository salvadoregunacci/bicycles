import React, {InputHTMLAttributes} from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
}

const Input = ({className = "", ...props}: IProps) => {
    return (
        <input
            className={`input t2 ${className}`}
            {...props}
        />
    );
};

export default Input;