import {TextareaHTMLAttributes} from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{

}

const TextArea = ({className = "", ...props}: IProps) => {
    return (
        <textarea className={`text-area t2 ${className}`} {...props}></textarea>
    );
};

export default TextArea;