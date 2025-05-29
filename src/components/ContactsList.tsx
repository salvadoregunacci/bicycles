import {HTMLAttributes} from "react";
import {useAppSelector} from "../hooks.ts";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
}

const ContactsList = ({className = "", ...props}: IProps) => {
    const {
        telephone,
        address: {
            city,
            street1,
            street2,
        },
        email,
        workTime
    } = useAppSelector(state => state.general.contacts);

    return (
        <div
            className={`contacts ${className}`}
            {...props}
        >
            <div className="container contacts_container">
                <div className="contacts__item telephone">
                    <svg className="contacts__item-icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.3333 4H10.6667C9.19391 4 8 5.19391 8 6.66667V25.3333C8 26.8061 9.19391 28 10.6667 28H21.3333C22.8061 28 24 26.8061 24 25.3333V6.66667C24 5.19391 22.8061 4 21.3333 4Z"
                            stroke="#F57520"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 24.0133V24" stroke="#F57520"
                              strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <a href={`tel:+${telephone.replace(/\D/g, "")}`} className="contacts__item-text t3">
                        {telephone}
                    </a>
                </div>
                <div className="contacts__item address">
                    <svg className="contacts__item-icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1922_247)">
                            <path
                                d="M20.7373 29.8148L23.9877 5.51823L4.57145 20.4815L14.6544 21.684L20.7373 29.8148Z"
                                stroke="#F57520"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1922_247">
                                <rect width="32" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <address className="contacts__item-text t3">
                        <span>{city}</span>
                        <span>{street1}, {street2}</span>
                    </address>
                </div>
                <div className="contacts__item email">
                    <svg className="contacts__item-icon email" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.6667 6.66699H5.33333C4.96515 6.66699 4.63181 6.81623 4.39052 7.05751C4.14924 7.29881 4 7.63214 4 8.00033V24.0003C4 24.7367 4.59696 25.3337 5.33333 25.3337H26.6667C27.4031 25.3337 28 24.7367 28 24.0003V8.00033C28 7.63214 27.8508 7.29881 27.6095 7.05751C27.3681 6.81623 27.0348 6.66699 26.6667 6.66699Z"
                            stroke="#F57520"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M4.39062 7.05762L14.1145 16.7814C15.1558 17.8229 16.8444 17.8229 17.8857 16.7814L27.6096 7.05762"
                            stroke="#F57520"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <a href={`mailto:${email}`} className="contacts__item-text t3">
                        {email}
                    </a>
                </div>
                <div className="contacts__item calendar">
                    <svg className="contacts__item-icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.3335 14.667H26.6668" stroke="#F57520"
                              strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M5.3335 9.33366V25.3337C5.3335 26.8065 6.5274 28.0003 8.00016 28.0003H24.0002C25.473 28.0003 26.6668 26.8065 26.6668 25.3337V14.667V9.33366C26.6668 7.8609 25.473 6.66699 24.0002 6.66699H8.00016C6.5274 6.66699 5.3335 7.8609 5.3335 9.33366Z"
                            stroke="#F57520"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 4V9.33333" stroke="#F57520"
                              strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M12 4V9.33333" stroke="#F57520"
                              strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <span className="contacts__item-text t3">
                            <span>Без вихідних</span>
                            <time>{workTime.start}-{workTime.end}</time>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactsList;