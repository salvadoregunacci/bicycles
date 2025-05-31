import Select, {SingleValue, StylesConfig} from 'react-select';
import {CatalogSortType, CatalogViewType} from "../../../enums.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {setCatalogSortBy, setCatalogViewType} from "../../../redux/slices/shop/slice.ts";
import {CatalogContext} from "../CatalogPage.tsx";
import {useContext} from "react";

interface IOptionType {
    value: CatalogSortType,
    label: string,
}

const CatalogControls = () => {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector(state => state.shop.catalogSortBy);
    const options: IOptionType[] = [
        {value: CatalogSortType.popularity, label: 'За популярністю'},
        {value: CatalogSortType.rating, label: 'За рейтингом'},
        {value: CatalogSortType.price_up, label: 'Ціни: за зростанням'},
        {value: CatalogSortType.price_down, label: 'Ціни: за спаданням'},
    ];
    const viewType = useAppSelector(state => state.shop.catalogViewType);
    const {activeFilter, setActiveFilter} = useContext(CatalogContext);
    const handleChangeSortType = (option: SingleValue<IOptionType>) => {
        if (option) {
            dispatch(setCatalogSortBy(option.value));
        }
    }
    const handleChangeViewType = (selectedViewType: CatalogViewType) => {
        dispatch(setCatalogViewType(selectedViewType));
    };
    const optionStyles: StylesConfig<IOptionType> = {
        control: (styles, {isFocused}) => ({
            ...styles,
            borderColor: isFocused ? "#EB6B16" : styles.borderColor,
            boxShadow: isFocused ? "0 0 0 1px #EB6B16" : styles.boxShadow,
            height: "46px",
            "&:hover": {
                borderColor: isFocused ? "#EB6B16" : styles.borderColor,
            },
        }),
        option: (styles, {isSelected}) => ({
            ...styles,
            backgroundColor: isSelected ? "#EB6B16" : "",
            "&:hover": {
                backgroundColor: isSelected ? "#EB6B16" : "rgba(235,107,22,0.4)",
            }
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#777777",
        })
    }

    return (
        <div className="catalog-controls">
            <div className="row">
                <button className={`filter-btn ${activeFilter ? "_active" : ""}`} onClick={()=> setActiveFilter(prev => !prev)}>
                    <svg viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0001 9V16.88C10.0401 17.18 9.94013 17.5 9.71013 17.71C9.61762 17.8027 9.50773 17.8763 9.38675 17.9264C9.26578 17.9766 9.1361 18.0024 9.00513 18.0024C8.87416 18.0024 8.74448 17.9766 8.62351 17.9264C8.50253 17.8763 8.39264 17.8027 8.30013 17.71L6.29013 15.7C6.18113 15.5933 6.09824 15.4629 6.04794 15.319C5.99764 15.175 5.98127 15.0213 6.00013 14.87V9H5.97013L0.210131 1.62C0.0477393 1.41153 -0.0255351 1.14726 0.00631899 0.88493C0.0381731 0.622602 0.172566 0.383546 0.380131 0.22C0.570131 0.08 0.780131 0 1.00013 0H15.0001C15.2201 0 15.4301 0.08 15.6201 0.22C15.8277 0.383546 15.9621 0.622602 15.9939 0.88493C16.0258 1.14726 15.9525 1.41153 15.7901 1.62L10.0301 9H10.0001Z"
                            fill="#F57520"/>
                    </svg>
                    <span>Фільтр</span>
                </button>
                <Select<IOptionType>
                    value={options.find(opt => opt.value === sortBy)}
                    options={options}
                    onChange={handleChangeSortType}
                    styles={optionStyles}
                    className="catalog-sort-select"
                    isSearchable={false}
                />
            </div>
            <div className="catalog-view-type">
                <div
                    className={`catalog-view-type__item grid ${viewType === CatalogViewType.grid ? "_selected" : ""}`}
                    onClick={() => handleChangeViewType(CatalogViewType.grid)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={`catalog-view-type__item tile ${viewType === CatalogViewType.tile ? "_selected" : ""}`}
                    onClick={() => handleChangeViewType(CatalogViewType.tile)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default CatalogControls;