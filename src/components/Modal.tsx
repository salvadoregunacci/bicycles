import React, {ReactNode, useEffect} from "react"
import CloseBtn from "./ui/CloseBtn.tsx";

type Props = {
    children: ReactNode,
    isActive: boolean,
    isCloseOverClick?: boolean,
    isCloseEscapeKey?: boolean,
    className?: string,
    onClose: (e?: React.MouseEvent) => void,
    closeBtnInBody?: boolean,
}
const Modal = ({
                   isActive,
                   children,
                   onClose,
                   isCloseOverClick = true,
                   isCloseEscapeKey = true,
                   className = "",
                   closeBtnInBody = false,
               }: Props) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (isCloseOverClick && e.target && e.target instanceof HTMLElement && !e.target.closest(".modal__content")) {
            onClose(e);
            document.body.style.overflowY = "";
        }
    }

    const handleClickCloseBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClose(e);
        document.body.style.overflowY = "";
    }

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                onClose();
                document.body.style.overflowY = "";
            }
        }

        if (isCloseEscapeKey) {
            document.addEventListener("keydown", handleKeydown);
        }
    }, []);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }
    }, [isActive]);

    return (
        <div
            className={`modal ${className} ${closeBtnInBody ? "_close-btn-inner" : ""} ${isActive ? "active" : ""}`}
            onClick={handleClick}
        >
            <div className="modal__content">
                {
                    closeBtnInBody ?
                        <CloseBtn
                            className="modal__close-btn"
                            onClick={handleClickCloseBtn}
                        />
                        : null
                }
                {children}
            </div>
            {
                !closeBtnInBody ?
                    <CloseBtn
                        className="modal__close-btn"
                        onClick={handleClickCloseBtn}
                    />
                    : null
            }
        </div>
    );
};

export default Modal;