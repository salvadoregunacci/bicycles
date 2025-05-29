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
    viewAllLink?: string,
    className?: string,
    itemsPerView?: number,
}

const ItemsSection = ({items, title, viewAllLink, itemsPerView = 3, className = ""}: Props) => {
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
                                slidesPerView={itemsPerView}
                                className="items-section__slider"
                                navigation
                                keyboard
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    700: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 24,
                                    }
                                }}
                            >
                                {
                                    items.map(item => (
                                        <SwiperSlide key={crypto.randomUUID()}>
                                            <ItemCard item={item}/>
                                        </SwiperSlide>
                                    ))
                                }
                                {
                                    viewAllLink ?
                                        <div slot="container-end">
                                            <div className="items-section__view-all-wrap">
                                                <Link
                                                    to={viewAllLink}
                                                    className="items-section__view-all-btn t4">
                                                    Показати всe
                                                </Link>
                                            </div>
                                        </div>
                                        : null
                                }
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