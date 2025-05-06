import {useAppSelector} from "../../../hooks.ts";
import Button from "../../../components/ui/Button.tsx";

const Summary = () => {
    const cartItems = useAppSelector(state => state.shop.cartItems);
    const summary = Number(cartItems.reduce((prev, item) => prev + (item.price * item.count), 0));
    const sale = 5000;

    return (
        <div className="cart-summary">
            <div className="cart-summary__rows">
                <div className="cart-summary__row">
                    <div className="cart-summary__row-title t3">Номер замовлення:</div>
                    <div className="cart-summary__row-value t3">729567678</div>
                </div>
                <div className="cart-summary__row">
                    <div className="cart-summary__row-title t3">Сума замовлення (без знижки):</div>
                    <div className="cart-summary__row-value t3">{summary.toLocaleString("ru-RU")} &#8372;</div>
                </div>
                <div className="cart-summary__row">
                    <div className="cart-summary__row-title t3">Знижка:</div>
                    <div className="cart-summary__row-value t3">
                        {Number(sale).toLocaleString("ru-RU")} &#8372;
                    </div>
                </div>
            </div>
            <div className="cart-summary__total">
                <div className="cart-summary__total-title">Всього:</div>
                <div className="cart-summary__total-value">
                    {((summary - sale) <= 0 ? 0 : (summary - sale)).toLocaleString("ru-RU")} &#8372;
                </div>
            </div>
            <Button className="place-order">
                Оформити замовлення
            </Button>
        </div>
    );
};

export default Summary;