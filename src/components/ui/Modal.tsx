import React, {ReactNode, useEffect} from "react"
import CloseBtn from "./CloseBtn.tsx";

type Props = {
    children: ReactNode,
    isActive: boolean,
    isCloseOverClick?: boolean,
    isCloseEscapeKey?: boolean,
    className?: string,
    onClose: (e?: React.MouseEvent) => void
}
const Modal = ({
                   isActive,
                   children,
                   onClose,
                   isCloseOverClick = true,
                   isCloseEscapeKey = true,
                   className = ""
               }: Props) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (isCloseOverClick && e.target && e.target instanceof HTMLElement && !e.target.closest(".modal__content")) {
            onClose(e);
        }
    }

    const handleClickCloseBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClose(e);
    }

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                onClose();
            }
        }

        if (isCloseEscapeKey) {
            document.addEventListener("keydown", handleKeydown);
        }
    }, []);

    useEffect(()=> {
        if (isActive) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }
    }, [isActive]);

    return (
        <div
            className={`modal ${className} ${isActive ? "active" : ""}`}
            onClick={handleClick}
        >
            <div className="modal__content">
                {children}
            </div>
            <CloseBtn
                className="modal__close-btn"
                onClick={handleClickCloseBtn}
            />
        </div>
    );
};

export default Modal;