import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Button from "../../../components/ui/Button.tsx";
import {Link} from "react-router-dom";
import {DeliveryErrors, DeliveryRequiredField} from "../../../types.ts";
import {setDeliveryErrors} from "../../../redux/slices/order/slice.ts";

interface IProps {
    onClickConfirm: () => void,
}

const Total = ({onClickConfirm}: IProps) => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.shop.cartItems);
    const totalPrice = useAppSelector(state => state.shop.cartTotalPrice);
    const currency = useAppSelector(state => state.shop.currency);

    const deliveryMethod = useAppSelector(state => state.order.deliveryMethod);
    const selectedWarehouse = useAppSelector(state => state.order.selectedWarehouse);
    const selectedCity = useAppSelector(state => state.order.selectedCity);
    const address = useAppSelector(state => state.order.address);
    const firstname = useAppSelector(state => state.order.firstname);
    const lastname = useAppSelector(state => state.order.lastname);
    const telephone = useAppSelector(state => state.order.telephone);
    const email = useAppSelector(state => state.order.email);

    const getWordForm = (count: number) => {
        if (count % 10 === 1 && count % 100 !== 11) {
            return `${count} товар`;
        } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
            return `${count} товари`;
        } else {
            return `${count} товарів`;
        }
    }

    const getDeliveryErrors = (fields: Record<DeliveryRequiredField, string>): DeliveryErrors => {
        let errors: DeliveryErrors = {};
        const inspectFields: DeliveryRequiredField[] = [
            "firstname",
            "lastname",
            "telephone",
            "address",
            "selectedCity",
            "selectedWarehouse",
        ];

        inspectFields.forEach(fieldName => {
            if (fields[fieldName].length <= 0) {
                if (fieldName === "address") {
                    if(deliveryMethod === "courier") {
                        errors[fieldName] = "Обов'язкове поле";
                    }
                } else {
                    errors[fieldName] = "Обов'язкове поле";
                }
            }
        });

        return errors;
    }

    const handleClickConfirm = () => {
        const errors = getDeliveryErrors({
            firstname,
            lastname,
            telephone,
            address,
            selectedCity,
            selectedWarehouse,
        });

        if (Object.keys(errors).length <= 0) {
            onClickConfirm();
        } else {
            dispatch(setDeliveryErrors(errors));
        }
    }

    return (
        <div className="order-block total">
            <div className="total-cols">
                <div className="col title">
                    <h3>Ваше замовлення</h3>
                </div>
                <div className="col info">
                    <div className="info-title t2">
                        {
                            deliveryMethod === "novaposhta"
                                ? "Доставка Новою поштою"
                                : deliveryMethod === "courier"
                                    ? "Доставка кур'єром"
                                    : null
                        }
                    </div>
                    <div className="info-row">
                        <div className="info-row__title t2">
                            {
                                deliveryMethod === "novaposhta"
                                    ? "Відділення:"
                                    : "Адреса"
                            }
                        </div>
                        <div className="info-row__value t2">
                            {
                                deliveryMethod === "novaposhta"
                                    ? (selectedCity.length <= 0 && selectedWarehouse.length <= 0
                                            ? "..."
                                            : `${selectedCity},  ${selectedWarehouse}`
                                    )
                                    : (selectedCity.length <= 0 && address.length <= 0
                                            ? "..."
                                            : `${selectedCity},  ${address}`
                                    )
                            }
                        </div>
                    </div>
                    <div className="info-row">
                        <div className="info-row__title t2">Отримувач:</div>
                        <div className="info-row__value t2">
                            {
                                firstname.length && lastname.length ?
                                    (firstname + " " + lastname)
                                    : "..."
                            }
                        </div>
                    </div>
                    <div className="info-row">
                        <div className="info-row__title t2">Телефон:</div>
                        <div className="info-row__value t2">{telephone || "..."}</div>
                    </div>
                    <div className="info-row">
                        <div className="info-row__title t2">E-mail:</div>
                        <div className="info-row__value t2">{email || "..."}</div>
                    </div>
                </div>
                <div className="col summary">
                    <div className="summary-row">
                        <div className="summary-title sub-h">Всього <output>{getWordForm(cartItems.length)}</output>:</div>
                        <div className="summary-price h2"><output>{Number(totalPrice).toLocaleString("ru-RU")}</output> {currency}</div>
                    </div>
                    <Button
                        className="order-confirm-btn"
                        onClick={handleClickConfirm}
                    >
                        Підтвердити замовлення
                    </Button>
                    <div className="summary-agree t8">
                        Ваші особисті дані використовуватимуться для опрацювання ваших замовлень, спрощення вашої
                        роботи з сайтом і для інших цілей, описаних у нашій <Link to="#">політиці
                        конфіденційності</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;