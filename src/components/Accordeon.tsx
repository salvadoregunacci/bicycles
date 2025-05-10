import {ReactNode, useRef, useState} from "react";

interface IProps {
    title: string,
    children: ReactNode,
}

const Accordeon = ({title, children}: IProps) => {
    const [isActive, setIsActive] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`accordeon ${isActive ? "_active" : ""}`}>
            <div className="accordeon__header" onClick={() => setIsActive(prev => !prev)}>
                <div className="title sub-h2">{title}</div>
                <svg className="icon" width="20" height="12" viewBox="0 0 20 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.901562 2.37495L9.30156 10.8C9.40156 10.9 9.5099 10.9706 9.62656 11.012C9.74323 11.054 9.86823 11.075 10.0016 11.075C10.1349 11.075 10.2599 11.054 10.3766 11.012C10.4932 10.9706 10.6016 10.9 10.7016 10.8L19.1266 2.37495C19.3599 2.14162 19.4766 1.84995 19.4766 1.49995C19.4766 1.14995 19.3516 0.849952 19.1016 0.599952C18.8516 0.349952 18.5599 0.224952 18.2266 0.224952C17.8932 0.224952 17.6016 0.349952 17.3516 0.599952L10.0016 7.94995L2.65156 0.599952C2.41823 0.366618 2.1309 0.249951 1.78956 0.249951C1.44756 0.249951 1.15156 0.374951 0.901562 0.624951C0.651562 0.874951 0.526562 1.16662 0.526562 1.49995C0.526562 1.83328 0.651562 2.12495 0.901562 2.37495Z"
                        fill="#101010"/>
                </svg>
            </div>
            <div
                ref={bodyRef}
                className="accordeon__body"
                style={{maxHeight: (isActive ? ((bodyRef.current?.scrollHeight || 0) + 48) : 0)}}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordeon;