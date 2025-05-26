import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Loader from "../../../components/ui/Loader.tsx";
import ItemCard from "../../../components/ItemCard.tsx";
import {useEffect} from "react";
import {getWishlist} from "../../../redux/slices/shop/asyncThunks.ts";

const Wishlist = () => {
    const dispatch = useAppDispatch();
    const wishlist = useAppSelector(state => state.shop.wishlist);

    useEffect(() => {
        if (wishlist === null) {
            dispatch(getWishlist());
        }
    }, []);

    return (
        <section className="wishlist">
            <h3>Список бажань</h3>
            {
                wishlist ?
                    wishlist.length ?
                        <div className="wishlist__items">
                            {
                                wishlist.map((item, index) => (
                                    <ItemCard item={item} key={index}/>
                                ))
                            }
                        </div>
                        :
                        <div className="empty-label">Пусто</div>
                    :
                    <Loader/>
            }
        </section>
    );
};

export default Wishlist;