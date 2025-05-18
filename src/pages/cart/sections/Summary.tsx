import {useAppSelector} from "../../../hooks.ts";
import Button from "../../../components/ui/Button.tsx";
import {Link} from "react-router-dom";

const Summary = () => {
    const totalSale = useAppSelector(state => state.shop.cartTotalSale);
    const totalPrice = useAppSelector(state => state.shop.cartTotalPrice);
    const currency = useAppSelector(state => state.shop.currency);

    return (
        <aside className="cart-summary">
            <div className="cart-summary__rows">
                <div className="cart-summary__row">
                    <h4 className="cart-summary__row-title t3">Номер замовлення:</h4>
                    <data className="cart-summary__row-value t3" value="729567678">729567678</data>
                </div>
                <div className="cart-summary__row">
                    <h4 className="cart-summary__row-title t3">Сума замовлення <em>(без знижки)</em>:</h4>
                    <div className="cart-summary__row-value t3">
                        <output>{Number(totalPrice).toLocaleString("ru-RU")}</output>
                        {currency}
                    </div>
                </div>
                {
                    totalSale > 0 ?
                        <div className="cart-summary__row">
                            <h4 className="cart-summary__row-title t3">Знижка:</h4>
                            <div className="cart-summary__row-value t3">
                                <output>{Number(totalSale).toLocaleString("ru-RU")}</output>
                                {currency}
                            </div>
                        </div>
                        :
                        null
                }
            </div>
            <div className="cart-summary__total">
                <h4 className="cart-summary__total-title">Всього:</h4>
                <div className="cart-summary__total-value">
                    <output>{(totalPrice <= 0 ? 0 : totalPrice).toLocaleString("ru-RU")}</output>
                    {currency}
                </div>
            </div>
            <Button as={Link} to="/order" className="place-order">
                Оформити замовлення
            </Button>
        </aside>
    );
};

export default Summary;