import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import {Keyboard, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import {IShopItem} from "../types.ts";
import ItemCard from "./ItemCard.tsx";
import Loader from "./ui/Loader.tsx";
import Container from "./Container.tsx";

type Props = {
    items: IShopItem[] | null,
    title: string,
    viewAllLink: string,
    className?: string,
}

const ItemsSection = ({items, title, viewAllLink, className = ""}: Props) => {
    return (
        <section className={`section items-section ${className}`}>
            <Container>
                <h2 className="section-title">{title}</h2>
                {
                    items ?
                        items.length ?
                            <Swiper
                                modules={[Navigation, Keyboard]}
                                spaceBetween={40}
                                slidesPerView={3}
                                className="items-section__slider"
                                navigation
                                keyboard
                            >
                                {
                                    items.map(item => (
                                        <SwiperSlide key={crypto.randomUUID()}>
                                            <ItemCard item={item}/>
                                        </SwiperSlide>
                                    ))
                                }
                                <span slot="container-end">
                                    <span className="items-section__view-all-wrap">
                                        <Link to={viewAllLink}
                                              className="items-section__view-all-btn t4">Показати всe</Link>
                                    </span>
                                </span>
                            </Swiper>
                            :
                            <div className="empty-label h2">Пусто</div>
                        :
                        <Loader/>
                }
            </Container>
        </section>
    );
};

export default ItemsSection;