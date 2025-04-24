import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Button, {ButtonVariants} from "../../../components/ui/Button.tsx";
import PromoCards from "../../../components/PromoCards.tsx";
import Container from "../../../components/Container.tsx";

const Promo = () => {
    return (
        <section className="section section_promo">
            <Swiper
                className="promo-slider"
                slidesPerView={1}
                modules={[Pagination, EffectFade, Autoplay]}
                pagination={{
                    clickable: true
                }}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
            >
                <SwiperSlide>
                    <picture>
                        <source srcSet="/images/main/promo/bg_slide_1@1x.avif, /images/main/promo/bg_slide_1@2x.avif 2x"
                                type="image/avif"/>
                        <img src="/images/main/promo/bg_slide_1@1x.webp"
                             srcSet="/images/main/promo/bg_slide_1@2x.webp 2x"
                             alt="promo"/>
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source srcSet="/images/main/promo/bg_slide_2@1x.avif, /images/main/promo/bg_slide_2@2x.avif 2x"
                                type="image/avif"/>
                        <img src="/images/main/promo/bg_slide_2@1x.webp"
                             srcSet="/images/main/promo/bg_slide_2@2x.webp 2X"
                             alt="promo"/>
                    </picture>
                </SwiperSlide>
                <SwiperSlide>
                    <picture>
                        <source srcSet="/images/main/promo/bg_slide_3@1x.avif, /images/main/promo/bg_slide_3@2x.avif 2x"
                                type="image/avif"/>
                        <img src="/images/main/promo/bg_slide_3@1x.webp"
                             srcSet="/images/main/promo/bg_slide_3@2x.webp 2x"
                             alt="promo"/>
                    </picture>
                </SwiperSlide>
            </Swiper>

            <div className="promo">
                <Container>
                    <div className="promo__content">
                        <h1>Електро велосипеди</h1>
                        <p className="promo__offer sub-h3">
                            Cento10 Hybrid — це гоночний велосипед з допомагаючим педалюванню електроприводом, який
                            встановлює новий, дуже високий стандарт для даної категорії
                        </p>
                        <Button
                            link="#"
                            variant={ButtonVariants.Primary}
                            className="promo__action-btn"
                        >
                            Детальніше
                        </Button>
                    </div>
                </Container>
            </div>

            <PromoCards/>
        </section>

    );
};

export default Promo;