import {Swiper, SwiperSlide} from "swiper/react";

import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Loader from "../../../components/ui/Loader.tsx";
import ItemCard from "../../../components/ItemCard.tsx";
import React, {useEffect, useRef} from "react";
import {getBestItems} from "../../../redux/slices/shopSlice.ts";
import {Autoplay} from "swiper/modules";
import {Swiper as SwiperClass} from 'swiper/types';

import 'swiper/css';
import 'swiper/css/autoplay';
import Container from "../../../components/Container.tsx";

const Best = () => {
    const dispatch = useAppDispatch();
    const bestItems = useAppSelector(state => state.shop.bestItems);
    const swiperRef = useRef<SwiperClass | null>(null);

    useEffect(() => {
        if (bestItems === null) {
            dispatch(getBestItems());
        }
    }, []);

    const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
        if (swiperRef.current) {
            swiperRef.current?.autoplay.pause();
        }
    }

    const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
        if (swiperRef.current) {
            swiperRef.current?.autoplay.resume();
        }
    }

    return (
        <section className="section section_best">
            <Container>
                <h2>Найкращі моделі для зимової їзди</h2>
            </Container>
            <picture>
                <source
                    srcSet="/images/main/best/bg_particle_1@1x.avif, /images/main/best/bg_particle_1@2x.avif 2x"
                    type="image/avif"
                />
                <img
                    src="/images/main/best/bg_particle_1@1x.webp"
                    srcSet="/images/main/best/bg_particle_1@2x.webp 2x"
                    alt="дим"
                    className="best-items-particle best-items-particle_1"
                />
            </picture>
            <picture>
                <source
                    srcSet="/images/main/best/bg_particle_2@1x.avif, /images/main/best/bg_particle_2@2x.avif 2x"
                    type="image/avif"
                />
                <img
                    src="/images/main/best/bg_particle_2@1x.webp"
                    srcSet="/images/main/best/bg_particle_2@2x.webp 2x"
                    alt="дим"
                    className="best-items-particle best-items-particle_2"
                />
            </picture>
            {
                bestItems === null ?
                    <Loader/>
                    :
                    bestItems.length ?
                        <div
                            className="best-items-slider-wrap"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Swiper
                                className="best-items-slider"
                                loop={true}
                                spaceBetween={50}
                                slidesPerView={3}
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: true
                                }}
                                onSwiper={instance => {
                                    swiperRef.current = instance
                                }}
                            >
                                {
                                    bestItems.map(item => (
                                        <SwiperSlide key={crypto.randomUUID()}>
                                            <ItemCard item={item}/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        :
                        <div className="empty-label">Пусто</div>
            }
        </section>
    );
};

export default Best;