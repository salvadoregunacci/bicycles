import Page from "../Page.tsx";
import Container from "../../components/Container.tsx";
import DeliveryDetails from "./sections/DeliveryDetails.tsx";
import Total from "./sections/Total.tsx";
import "../../scss/pages/order.scss";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../../components/Modal.tsx";
import Button from "../../components/ui/Button.tsx";
import {resetOrder} from "../../redux/slices/order/slice.ts";

const OrderPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.shop.cartItems);
    const navigate = useNavigate();
    const [isActiveFinishModal, setIsActiveFinishModal] = useState(false);

    useEffect(() => {
        if (cartItems.length <= 0) {
            navigate("/catalog");
        } else {
            dispatch(resetOrder());
        }
    }, []);

    return (
        <Page title="Оформлення замовлення" className="order-page">
            <Header/>
            <Container className="order-page__container">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Оформлення замовлення</BreadcrumbsItem>
                </Breadcrumbs>
                <h2 className="order-page__title">Оформлення замовлення</h2>
                <DeliveryDetails/>
                <Total onClickConfirm={() => setIsActiveFinishModal(true)}/>
            </Container>
            <Footer/>
            <Modal
                isActive={isActiveFinishModal}
                className="order-confirmed-modal"
                onClose={() => setIsActiveFinishModal(false)}
                closeBtnInBody={true}
            >
                <h3>Ваше замовлення підтверджено</h3>
                <p className="order-confirmed-desc t2">
                    Детальну інформацію і статус вашого замовлення, можна дізнатися в <Link to="#">особистому
                    кабінеті</Link>.
                </p>
                <Button
                    className="track-order-btn"
                    as={Link}
                    to="#"
                >
                    Відстежити замовлення
                </Button>
            </Modal>
        </Page>
    );
};

export default OrderPage;