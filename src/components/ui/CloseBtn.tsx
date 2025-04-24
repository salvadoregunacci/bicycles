import React from "react"


const CloseBtn = ({onClick, className = ""}: React.ComponentPropsWithoutRef<"button">) => {
    return (
        <button className={`btn btn-close ${className}`} onClick={onClick} title="Закрити">
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.857497" y1="0.857865" x2="23.4849" y2="23.4853" stroke="#B3B3B3" strokeWidth="2"/>
                <line x1="23.3341" y1="0.707107" x2="0.706641" y2="23.3345" stroke="#B3B3B3" strokeWidth="2"/>
            </svg>
        </button>
    );
};

export default CloseBtn;