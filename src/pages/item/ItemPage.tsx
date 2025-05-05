import Page from "../Page.tsx";
import {useParams} from "react-router-dom";
import Promo from "./sections/Promo.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks.ts";
import {getItemFullInfo} from "../../redux/slices/shop/asyncThunks.ts";
import "../../scss/pages/item.scss"
import Header from "../../components/Header.tsx";
import Desc from "./sections/Desc.tsx";
import Features from "./sections/Features.tsx";
import Footer from "../../components/Footer.tsx";
import Delivery from "./sections/Delivery.tsx";
import SimilarItems from "./sections/SimilarItems.tsx";
import UpBtn from "../../components/ui/UpBtn.tsx";

const ItemPage = () => {
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            dispatch(getItemFullInfo(+params.id));
        }
    }, [params]);

    return (
        <Page title="Картка товару" className="item-page">
            <UpBtn/>
            <Header/>
            <Promo/>
            <Desc/>
            <Features/>
            <Delivery/>
            <SimilarItems/>
            <Footer/>
        </Page>
    );
};

export default ItemPage;