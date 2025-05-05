import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {useEffect} from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import ItemsSection from "../../../components/ItemsSection.tsx";
import {getNewItems} from "../../../redux/slices/shop/asyncThunks.ts";

const News = () => {
    const newItems = useAppSelector(state => state.shop.newItems);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (newItems === null) {
            dispatch(getNewItems());
        }
    }, []);

    return (
        <ItemsSection
            items={newItems}
            title="Новинки"
            viewAllLink="#"
            className="section_news"
        />
    );
};

export default News;