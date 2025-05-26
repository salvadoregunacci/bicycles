import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Loader from "../../../components/ui/Loader.tsx";
import OrderCard from "../../../components/OrderCard.tsx";
import {useEffect} from "react";
import {getOrders} from "../../../redux/slices/shop/asyncThunks.ts";

const OrderHistory = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.shop.orders);

    useEffect(() => {
        if (orders === null) {
            dispatch(getOrders());
        }
    }, []);

    return (
        <section className="order-history">
            <h3>Історія замовлень</h3>
            {
                orders ?
                    orders.length ?
                        <div className="order-history__items">
                            <header className="order-history__header">
                                <span>Дата:</span>
                                <span>Номер замовлення:</span>
                                <span>Сума замовлення:</span>
                                <span>Статус:</span>
                            </header>
                            <div className="order-history__body">
                                {
                                    orders.map(order => (
                                        <OrderCard
                                            key={order.id}
                                            {...order}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        :
                        <div className="empty-label">
                            Пусто
                        </div>
                    :
                    <Loader/>
            }
        </section>
    );
};

export default OrderHistory;