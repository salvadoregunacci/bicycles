import {IShopItem} from "../types.ts";
import {Link} from "react-router-dom";
import Button from "./ui/Button.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {setOneClickItem} from "../redux/slices/shop/slice.ts";
import {MouseEventHandler} from "react";

type Props = {
    className?: string,
    item: IShopItem,
}

const ItemCard = ({item, className = ""}: Props) => {
    const dispatch = useAppDispatch();
    const currency = useAppSelector(state => state.shop.currency);

    const handleClickOrderBtn: MouseEventHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(setOneClickItem(item));
    }

    return (
        <Link to={`/item/${item.id}`} className={`item-card ${className}`}>
            <div className="item-card__content">
                <div className="item-card__preview">
                    <img src={item.preview} alt="preview"/>
                </div>
                <div className="item-card__wrap">
                    <div className="item-card__title sub-h3">{item.title}</div>
                    <div className="item-card__price t1">
                        <span>{new Intl.NumberFormat("ua-Ua").format(item.price)} {currency}</span>
                        {
                            item.oldPrice ?
                                <span className="old-price">{new Intl.NumberFormat("ua-Ua").format(item.oldPrice)} {currency}</span>
                                :
                                null
                        }
                    </div>
                    <Button
                        className="item-card__btn"
                        onClick={handleClickOrderBtn}
                    >
                        <span className="item-card__btn-wrap">
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.875 0.5C7.04076 0.5 7.19973 0.565848 7.31694 0.683058C7.43415 0.800269 7.5 0.95924 7.5 1.125V3.625C7.5 3.79076 7.43415 3.94973 7.31694 4.06694C7.19973 4.18415 7.04076 4.25 6.875 4.25C6.70924 4.25 6.55027 4.18415 6.43306 4.06694C6.31585 3.94973 6.25 3.79076 6.25 3.625V1.125C6.25 0.95924 6.31585 0.800269 6.43306 0.683058C6.55027 0.565848 6.70924 0.5 6.875 0.5ZM2.0125 2.5125C2.07056 2.4543 2.13953 2.40812 2.21546 2.37661C2.29139 2.3451 2.37279 2.32888 2.455 2.32888C2.53721 2.32888 2.61861 2.3451 2.69454 2.37661C2.77047 2.40812 2.83944 2.4543 2.8975 2.5125L4.665 4.28125C4.72469 4.3389 4.77231 4.40787 4.80506 4.48412C4.83782 4.56037 4.85506 4.64239 4.85578 4.72537C4.8565 4.80836 4.84069 4.89066 4.80926 4.96747C4.77784 5.04428 4.73143 5.11406 4.67275 5.17275C4.61406 5.23143 4.54428 5.27784 4.46747 5.30926C4.39066 5.34069 4.30836 5.3565 4.22537 5.35578C4.14239 5.35506 4.06037 5.33782 3.98412 5.30506C3.90787 5.27231 3.8389 5.22469 3.78125 5.165L2.01375 3.3975C1.89658 3.28029 1.83076 3.12135 1.83076 2.95563C1.83076 2.7899 1.89658 2.63095 2.01375 2.51375L2.0125 2.5125ZM11.7375 2.5125C11.7957 2.57056 11.8419 2.63953 11.8734 2.71546C11.9049 2.79139 11.9211 2.87279 11.9211 2.955C11.9211 3.03721 11.9049 3.11861 11.8734 3.19454C11.8419 3.27047 11.7957 3.33944 11.7375 3.3975L9.9675 5.165C9.90985 5.22469 9.84088 5.27231 9.76463 5.30506C9.68837 5.33782 9.60636 5.35506 9.52338 5.35578C9.44039 5.3565 9.35809 5.34069 9.28128 5.30926C9.20447 5.27784 9.13469 5.23143 9.076 5.17275C9.01732 5.11406 8.97091 5.04428 8.93949 4.96747C8.90806 4.89066 8.89225 4.80836 8.89297 4.72537C8.89369 4.64239 8.91093 4.56037 8.94369 4.48412C8.97644 4.40787 9.02406 4.3389 9.08375 4.28125L10.8512 2.51375C10.9685 2.39658 11.1274 2.33076 11.2931 2.33076C11.4589 2.33076 11.6178 2.39658 11.735 2.51375L11.7375 2.5125ZM0 7.375C0 7.20924 0.0658481 7.05027 0.183058 6.93306C0.300269 6.81585 0.45924 6.75 0.625 6.75H3.125C3.29076 6.75 3.44973 6.81585 3.56694 6.93306C3.68415 7.05027 3.75 7.20924 3.75 7.375C3.75 7.54076 3.68415 7.69973 3.56694 7.81694C3.44973 7.93415 3.29076 8 3.125 8H0.625C0.45924 8 0.300269 7.93415 0.183058 7.81694C0.0658481 7.69973 0 7.54076 0 7.375ZM8.3 7.125C8.11758 6.97306 7.89566 6.8762 7.66021 6.84578C7.42475 6.81535 7.1855 6.8526 6.97045 6.95318C6.75539 7.05376 6.57343 7.2135 6.44584 7.41371C6.31826 7.61393 6.25033 7.84634 6.25 8.08375V19.46C6.25 20.615 7.68125 21.1525 8.44125 20.2837L10.9738 17.3888C11.1499 17.1879 11.3669 17.027 11.6103 16.9168C11.8537 16.8067 12.1178 16.7498 12.385 16.75H16.3988C17.5675 16.75 18.0975 15.2875 17.1987 14.54L8.3 7.12375V7.125ZM7.5 19.4625V8.08375L16.3988 15.5H12.385C11.9394 15.4999 11.499 15.5952 11.0933 15.7793C10.6875 15.9634 10.3259 16.2321 10.0325 16.5675L7.5 19.4625Z"
                                    fill="white"/>
                            </svg>
                            <span>В 1 клік</span>
                        </span>
                    </Button>
                </div>
                <div className="item-card__float item-card__flag">
                    <img src={item.country.flag} alt={item.country.name}/>
                </div>
                <div className="item-card__float item-card__available t2">
                    {
                        item.available ?
                            <span className="available">В наявності</span>
                            :
                            <span className="not_available">Немає в наявності</span>
                    }
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;