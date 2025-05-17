import Container from "../../../components/Container.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const Gallery = () => {
    return (
        <section className="gallery">
            <Container>
                <h2>Фотогалерея</h2>
            </Container>
            <Swiper
                className="gallery-slider"
                spaceBetween={40}
                slidesPerView={4.5}
                initialSlide={3}
            >
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_1/1x.avif 1x, /images/about/gallery/slide_1/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_1/1x.webp"
                             srcSet="/images/about/gallery/slide_1/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_2/1x.avif 1x, /images/about/gallery/slide_2/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_2/1x.webp"
                             srcSet="/images/about/gallery/slide_2/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_3/1x.avif 1x, /images/about/gallery/slide_3/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_3/1x.webp"
                             srcSet="/images/about/gallery/slide_3/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_4/1x.avif 1x, /images/about/gallery/slide_4/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_4/1x.webp"
                             srcSet="/images/about/gallery/slide_4/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_5/1x.avif 1x, /images/about/gallery/slide_5/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_5/1x.webp"
                             srcSet="/images/about/gallery/slide_5/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source
                            srcSet="/images/about/gallery/slide_6/1x.avif 1x, /images/about/gallery/slide_6/2x.avif 2x"
                            type="image/avif"
                        />
                        <img src="/images/about/gallery/slide_6/1x.webp"
                             srcSet="/images/about/gallery/slide_6/2x.webp 2x"
                             alt="slide"
                        />
                    </picture>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Gallery;