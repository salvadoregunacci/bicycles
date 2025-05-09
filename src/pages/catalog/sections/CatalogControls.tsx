import Select, {SingleValue, StylesConfig} from 'react-select';
import {CatalogSortType, CatalogViewType} from "../../../enums.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {setCatalogSortBy, setCatalogViewType} from "../../../redux/slices/shop/slice.ts";

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
            <Select<IOptionType>
                value={options.find(opt => opt.value === sortBy)}
                options={options}
                onChange={handleChangeSortType}
                styles={optionStyles}
                className="catalog-sort-select"
                isSearchable={false}
            />
            <div className="catalog-view-type">
                <div
                    className={`catalog-view-type__item grid ${viewType === CatalogViewType.grid ? "_selected" : ""}`}
                    onClick={()=> handleChangeViewType(CatalogViewType.grid)}
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
                    onClick={()=> handleChangeViewType(CatalogViewType.tile)}
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