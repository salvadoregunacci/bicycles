import Search from "./Search.tsx";
import LinkIcon from "./ui/LinkIcon.tsx";

const HeaderControls = () => {
    return (
        <div className="header-controls">
            <Search/>
            <LinkIcon to="/account/personal_data" title="Особистий кабінет">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 13H5C2.79086 13 1 14.7909 1 17V19H9H17V17C17 14.7909 15.2091 13 13 13Z" stroke="white"
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </LinkIcon>
            <LinkIcon to="/account/wishlist" includeNew={true} title="Вподобане">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.3314 9.0474L10 17L17.6686 9.0474C18.5211 8.1633 19 6.96429 19 5.71405C19 3.11055 16.9648 1 14.4543 1C13.2487 1 12.0925 1.49666 11.24 2.38071L10 3.66667L8.76 2.38071C7.90749 1.49666 6.75128 1 5.54569 1C3.03517 1 1 3.11055 1 5.71405C1 6.96429 1.47892 8.1633 2.3314 9.0474Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </LinkIcon>
            <LinkIcon to="/cart" includeNew={true} title="Кошик">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 15H5.5L3.5 1H1" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M3.78564 3H19.9999L16.9999 12H5.07135" stroke="white" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M8 19C9.1046 19 10 18.1046 10 17C10 15.8954 9.1046 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </LinkIcon>
        </div>
    );
};

export default HeaderControls;