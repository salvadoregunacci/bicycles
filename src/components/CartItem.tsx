import {ICartItem} from "../types.ts";
import CountSelect from "./ui/CountSelect.tsx";
import {useAppDispatch} from "../hooks.ts";
import {changeCartItemCount, removeCartItem} from "../redux/slices/shop/slice.ts";

interface IProps {
    item: ICartItem,
}

const CartItem = ({item}: IProps) => {
    const dispatch = useAppDispatch();

    const handleChangeCount = (action: "up" | "down") => {
        dispatch(changeCartItemCount({
            itemID: item.id,
            count: action === "up" ? (item.count + 1) : (item.count - 1),
        }));
    }

    const handleRemoveItem = () => {
        dispatch(removeCartItem(item.id));
    }

    return (
        <div className="cart-item">
            <div className="cart-item__preview">
                <img src={item.preview} alt="preview"/>
            </div>
            <div className="cart-item__title">
                {item.title}
            </div>
            <CountSelect
                onUp={() => handleChangeCount("up")}
                onDown={() => handleChangeCount("down")}
                value={item.count}
                maxCount={item.maxAvailableCount}
            />
            <div className="cart-item__price">
                <span className="current sub-h">
                    {Number(item.price).toLocaleString("ru-RU")} &#8372;
                </span>
                {
                    item.oldPrice ?
                        <span className="old">
                            {Number(item.oldPrice).toLocaleString("ru-RU")} &#8372;
                        </span>
                        : null
                }
            </div>
            <div
                className="cart-item__remove-btn"
                title="Видалити"
                onClick={handleRemoveItem}
            >
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.571014" y1="0.738556" x2="15.656" y2="15.8235" stroke="#B3B3B3" strokeWidth="1.33333"/>
                    <line x1="15.5554" y1="0.638031" x2="0.470443" y2="15.723" stroke="#B3B3B3" strokeWidth="1.33333"/>
                </svg>
            </div>
        </div>
    );
};

export default CartItem;