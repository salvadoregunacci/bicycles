import {useAppSelector} from "../../../hooks.ts";
import Button from "../../../components/ui/Button.tsx";
import {Link} from "react-router-dom";

const Summary = () => {
    const totalSale = useAppSelector(state => state.shop.cartTotalSale);
    const totalPrice = useAppSelector(state => state.shop.cartTotalPrice);
    const currency = useAppSelector(state => state.shop.currency);

    return (
        <div className="cart-summary">
            <div className="cart-summary__rows">
                <div className="cart-summary__row">
                    <div className="cart-summary__row-title t3">Номер замовлення:</div>
                    <div className="cart-summary__row-value t3">729567678</div>
                </div>
                <div className="cart-summary__row">
                    <div className="cart-summary__row-title t3">Сума замовлення (без знижки):</div>
                    <div className="cart-summary__row-value t3">
                        {Number(totalPrice).toLocaleString("ru-RU")} {currency}
                    </div>
                </div>
                {
                    totalSale > 0 ?
                        <div className="cart-summary__row">
                            <div className="cart-summary__row-title t3">Знижка:</div>
                            <div className="cart-summary__row-value t3">
                                {Number(totalSale).toLocaleString("ru-RU")} {currency}
                            </div>
                        </div>
                        :
                        null
                }
            </div>
            <div className="cart-summary__total">
                <div className="cart-summary__total-title">Всього:</div>
                <div className="cart-summary__total-value">
                    {(totalPrice <= 0 ? 0 : totalPrice).toLocaleString("ru-RU")} {currency}
                </div>
            </div>
            <Button as={Link} to="/order" className="place-order">
                Оформити замовлення
            </Button>
        </div>
    );
};

export default Summary;