interface IProps {
    currentPage: number,
    totalPages: number,
    onChange: (page: number) => void,
    className?: string,
}

const Pagination = ({currentPage, totalPages, onChange, className = ""}: IProps) => {
    const handleChangePage = (page: number) => {
        onChange(page);
    }

    return (
        <nav className={`pagination ${className}`}>
            <div className="pagination__items">
                {
                    currentPage > 1 ?
                        <div
                            className="pagination__arrow pagination__arrow_prev"
                            onClick={() => handleChangePage(currentPage - 1)}
                        >
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.518 1.17495L0.500139 7.47495C0.428711 7.54995 0.378235 7.6312 0.348711 7.7187C0.318711 7.8062 0.303711 7.89995 0.303711 7.99995C0.303711 8.09995 0.318711 8.1937 0.348711 8.2812C0.378235 8.3687 0.428711 8.44995 0.500139 8.52495L6.518 14.8437C6.68466 15.0187 6.893 15.1062 7.143 15.1062C7.393 15.1062 7.60728 15.0125 7.78585 14.825C7.96443 14.6375 8.05371 14.4187 8.05371 14.1687C8.05371 13.9187 7.96443 13.7 7.78585 13.5125L2.53585 7.99995L7.78585 2.48745C7.95252 2.31245 8.03585 2.09695 8.03585 1.84095C8.03585 1.58445 7.94657 1.36245 7.768 1.17495C7.58943 0.987451 7.38109 0.893701 7.143 0.893701C6.9049 0.893701 6.69657 0.987451 6.518 1.17495Z"
                                    fill="#777777"/>
                            </svg>
                        </div>
                        : null
                }
                {
                    currentPage - 3 > 0 ?
                        <div
                            className="pagination__item"
                            onClick={() => handleChangePage(currentPage - 3)}
                        >...</div>
                        : null
                }
                {
                    Array.from({length: currentPage === 1 ? 4 : 5}, (_, i) => (currentPage === 1 ? currentPage : (currentPage - 2)) + i).map((index) => (
                        index <= totalPages && index > 0 ?
                            <div
                                key={index}
                                className={`pagination__item ${index === currentPage ? "_active" : ""}`}
                                onClick={() => handleChangePage(index)}
                            >
                                {index}
                            </div>
                            :
                            null
                    ))
                }
                {
                    currentPage + 4 <= totalPages ?
                        <div
                            className="pagination__item"
                            onClick={() => handleChangePage(currentPage + 4)}
                        >...</div>
                        : null
                }
                {
                    currentPage + 1 <= totalPages ?
                        <div
                            className="pagination__arrow pagination__arrow_prev"
                            onClick={() => handleChangePage(currentPage + 1)}
                        >
                            <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.482 1.17495L8.49986 7.47495C8.57129 7.54995 8.62177 7.6312 8.65129 7.7187C8.68129 7.8062 8.69629 7.89995 8.69629 7.99995C8.69629 8.09995 8.68129 8.1937 8.65129 8.2812C8.62177 8.3687 8.57129 8.44995 8.49986 8.52495L2.482 14.8437C2.31534 15.0187 2.107 15.1062 1.857 15.1062C1.607 15.1062 1.39272 15.0125 1.21415 14.825C1.03557 14.6375 0.946289 14.4187 0.946289 14.1687C0.946289 13.9187 1.03557 13.7 1.21415 13.5125L6.46415 7.99995L1.21415 2.48745C1.04748 2.31245 0.964146 2.09695 0.964146 1.84095C0.964146 1.58445 1.05343 1.36245 1.232 1.17495C1.41057 0.987451 1.61891 0.893701 1.857 0.893701C2.0951 0.893701 2.30343 0.987451 2.482 1.17495Z"
                                    fill="#777777"/>
                            </svg>
                        </div>
                        : null
                }
            </div>
        </nav>
    );
};

export default Pagination;