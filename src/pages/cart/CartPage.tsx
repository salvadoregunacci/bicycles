import Page from "../Page.tsx";
import Container from "../../components/Container.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/cart.scss";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import {Link} from "react-router-dom";
import Items from "./sections/Items.tsx";
import Summary from "./sections/Summary.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {useEffect} from "react";
import {getCartSimilarItems} from "../../redux/slices/shop/asyncThunks.ts";
import ItemsSection from "../../components/ItemsSection.tsx";
import {clearCart} from "../../redux/slices/shop/slice.ts";

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.shop.cartItems);
    const similarItems = useAppSelector(state => state.shop.cartSimilarItems);

    useEffect(() => {
        if (cartItems.length) {
            dispatch(getCartSimilarItems());
        }
    }, [cartItems]);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <Page title="Корзина" className="cart-page">
            <Header/>
            <Container className="cart-page__container">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Кошик</BreadcrumbsItem>
                </Breadcrumbs>
                <h2>Кошик</h2>
                <div className="cart-page__row">
                    <div className="cart-page__wrap">
                        <div className="cart-page__header">
                            <Link to="/catalog" className="back-to-shopping">
                                Повернутися до покупок
                            </Link>
                            {
                                cartItems.length ?
                                    <button
                                        className="clear-cart-btn t5"
                                        onClick={handleClearCart}
                                    >
                                        Очистити кошик
                                    </button>
                                    :
                                    null
                            }
                        </div>
                        <Items/>
                    </div>
                    <Summary/>
                </div>
                <ItemsSection
                    items={similarItems}
                    title="Схожі товари"
                    itemsPerView={4}
                />
            </Container>
            <Footer/>
        </Page>
    );
};

export default CartPage;