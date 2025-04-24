import {useEffect, useState} from "react";

const UpBtn = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsActive(window.scrollY > 1000)
        })
    }, []);

    function handleClick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <button
            className={`up-btn ${isActive ? "_active" : ""}`}
            onClick={handleClick}
        >
            <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32.0458 15.6428L17.6958 1.19994C17.5249 1.02852 17.3399 0.907373 17.1406 0.836516C16.9413 0.764516 16.7277 0.728516 16.4999 0.728516C16.2722 0.728516 16.0586 0.764516 15.8593 0.836516C15.66 0.907373 15.4749 1.02852 15.3041 1.19994L0.911392 15.6428C0.512781 16.0428 0.313476 16.5428 0.313476 17.1428C0.313476 17.7428 0.527017 18.2571 0.954101 18.6857C1.38118 19.1142 1.87945 19.3285 2.44889 19.3285C3.01834 19.3285 3.5166 19.1142 3.94368 18.6857L16.4999 6.08566L29.0562 18.6857C29.4548 19.0857 29.9457 19.2857 30.5288 19.2857C31.113 19.2857 31.6187 19.0714 32.0458 18.6428C32.4729 18.2142 32.6864 17.7142 32.6864 17.1428C32.6864 16.5714 32.4729 16.0714 32.0458 15.6428Z"
                    fill="white"/>
            </svg>
        </button>
    );
};

export default UpBtn;