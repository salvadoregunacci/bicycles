import {IOrder} from "../types.ts";
import {useAppSelector} from "../hooks.ts";
import {useRef, useState} from "react";

interface IProps extends IOrder {
}

const OrderCard = ({
                       date,
                       id,
                       status,
                       items
                   }: IProps) => {
    const [active, setActive] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const currency = useAppSelector(state => state.shop.currency);
    const dateObj = new Date(date * 1000);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();

    return (
        <div className={`order-card ${active ? "_active" : ""}`}>
            <header
                className="order-card__header"
                onClick={() => setActive(!active)}
            >
                <span className="col">
                    {day}.{month}.{year}
                </span>
                <span className="col">
                    {id}
                </span>
                <span className="col">
                    {
                        items.reduce((acc, item) =>
                            (acc + item.price), 0).toLocaleString("ru-RU") + " " + currency
                    }
                </span>
                <span className="col status">
                    {status === "new" ? "Нове" : null}
                    {status === "completed" ? "Завершене" : null}
                </span>
                <svg className="handler" width="15" height="8" viewBox="0 0 15 8" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.046 6.46429L8.09596 0.446429C8.02513 0.375 7.94839 0.324524 7.86576 0.295C7.78312 0.265 7.69457 0.25 7.60013 0.25C7.50569 0.25 7.41714 0.265 7.33451 0.295C7.25187 0.324524 7.17513 0.375 7.1043 0.446429L1.13659 6.46429C0.97131 6.63095 0.888672 6.83929 0.888672 7.08929C0.888672 7.33929 0.977213 7.55357 1.1543 7.73214C1.33138 7.91071 1.53798 8 1.77409 8C2.0102 8 2.2168 7.91071 2.39388 7.73214L7.60013 2.48214L12.8064 7.73214C12.9717 7.89881 13.1752 7.98214 13.417 7.98214C13.6592 7.98214 13.8689 7.89286 14.046 7.71429C14.223 7.53571 14.3116 7.32738 14.3116 7.08929C14.3116 6.85119 14.223 6.64286 14.046 6.46429Z"
                        fill="#F57520"/>
                </svg>
            </header>
            <div
                className="order-card__body"
                ref={bodyRef}
                style={{maxHeight: (active ? (bodyRef.current?.scrollHeight || 0) : 0)}}
            >
                {
                    items.map((item, index) => (
                        <div key={index} className="order-item">
                            <div className="order-item__preview">
                                <img src={item.preview} alt=""/>
                            </div>
                            <div className="order-item__title sub-h3">
                                {item.title}
                            </div>
                            <div className="order-item__price sub-h">
                                <div className="current">
                                    {item.price.toLocaleString("ru-RU")} {currency}
                                </div>
                                {
                                    item.oldPrice ?
                                        <div className="old">
                                            {item.oldPrice.toLocaleString("ru-RU")} {currency}
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OrderCard;