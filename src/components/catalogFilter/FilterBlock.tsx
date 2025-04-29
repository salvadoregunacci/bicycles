import {HTMLAttributes, ReactNode, useState} from "react";
import {Link} from "react-router-dom";

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    title: string,
    className?: string,
    isShowMoreBtn?: boolean,
    onClickMore?: () => void,
}

const FilterBlock = ({
                         children,
                         title,
                         onClickMore,
                         className = "",
                         isShowMoreBtn = false,
                     }: IProps) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const [isVisibleAll, setIsVisibleAll] = useState(false);

    const handleClickMoreBtn = () => {
        setIsVisibleAll(prev => !prev);

        if (onClickMore) {
            onClickMore()
        }
    }

    return (
        <div className={`filter-block ${className} ${isCollapse ? "_collapse" : ""}`}>
            <div
                className="filter-block__header"
                onClick={() => setIsCollapse(prev => !prev)}
            >
                <div className="filter-block__title sub-h2">{title}</div>
                <div className="filter-block__chevron">
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.8248 7.01787L8.5248 1.00002C8.4498 0.928589 8.36856 0.878113 8.28105 0.848589C8.19355 0.818589 8.0998 0.803589 7.9998 0.803589C7.89981 0.803589 7.80606 0.818589 7.71855 0.848589C7.63105 0.878113 7.5498 0.928589 7.4748 1.00002L1.15605 7.01787C0.981055 7.18454 0.893555 7.39287 0.893555 7.64287C0.893555 7.89287 0.987305 8.10716 1.1748 8.28573C1.3623 8.4643 1.58105 8.55359 1.83105 8.55359C2.08105 8.55359 2.2998 8.4643 2.4873 8.28573L7.99981 3.03573L13.5123 8.28573C13.6873 8.4524 13.9028 8.53573 14.1588 8.53573C14.4153 8.53573 14.6373 8.44645 14.8248 8.26787C15.0123 8.0893 15.1061 7.88097 15.1061 7.64287C15.1061 7.40478 15.0123 7.19645 14.8248 7.01787Z"
                            fill="#777777"/>
                    </svg>
                </div>
            </div>
            <div className="filter-block__body">
                {children}
                {
                    isShowMoreBtn ?
                        <button
                            className="filter-block__more-btn t4"
                            onClick={handleClickMoreBtn}
                        >
                            {
                                isVisibleAll ? "Згорнути" : "Показати ще"
                            }
                        </button>
                        :
                        null
                }
            </div>
        </div>
    );
};

export default FilterBlock;