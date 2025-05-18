import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectFade} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import {Link} from "react-router-dom";
import Container from "../../../components/Container.tsx";

const Benefits = () => {
    return (
        <section className="section section_benefits">
            <Container>
                <h2 className="section-title">Переваги</h2>
            </Container>
            <div className="benefits-wrap">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    effect="fade"
                    className="benefits-slider"
                >
                    <SwiperSlide>
                        <picture>
                            <source
                                srcSet="/images/main/benefits/slide_1@1x.avif, /images/main/benefits/slide_1@2x.avif 2x"
                                type="image/avif"
                            />
                            <img
                                className="benefits-slider__img"
                                src="/images/main/benefits/slide_1@1x.webp"
                                srcSet="/images/main/benefits/slide_1@2x.webp 2x"
                                alt="man"
                            />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        <picture>
                            <source
                                srcSet="/images/main/benefits/slide_2@1x.avif, /images/main/benefits/slide_2@2x.avif 2x"
                                type="image/avif"
                            />
                            <img
                                className="benefits-slider__img"
                                src="/images/main/benefits/slide_2@1x.webp"
                                srcSet="/images/main/benefits/slide_2@2x.webp 2x"
                                alt="man"
                            />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                        <picture>
                            <source
                                srcSet="/images/main/benefits/slide_3@1x.avif, /images/main/benefits/slide_3@2x.avif 2x"
                                type="image/avif"
                            />
                            <img
                                className="benefits-slider__img"
                                src="/images/main/benefits/slide_3@1x.webp"
                                srcSet="/images/main/benefits/slide_3@2x.webp 2x"
                                alt="man"
                            />
                        </picture>
                    </SwiperSlide>
                </Swiper>
                <div className="benefits-items">
                    <div className="benefits-item">
                        <h3 className="benefits-item__title sub-h">безкоштовна доставка</h3>
                        <p className="benefits-item__desc t3 ">Ми користуємось усіма популярними видами доставки</p>
                        <Link to="#" className="benefits-item__link t1">Детальніше</Link>
                    </div>
                    <div className="benefits-item">
                        <h3 className="benefits-item__title sub-h">обмін і повернення</h3>
                        <p className="benefits-item__desc t3 ">Усі товари забезпечені фірмовою гарантією
                            фірм-виробників</p>
                        <Link to="#" className="benefits-item__link t1">Детальніше</Link>
                    </div>
                    <div className="benefits-item">
                        <h3 className="benefits-item__title sub-h">додат. обслуговування</h3>
                        <p className="benefits-item__desc t3 ">Ми виконуємо ремонт велосипеда будь-якої складності</p>
                        <Link to="#" className="benefits-item__link t1">Детальніше</Link>
                    </div>
                    <div className="benefits-item">
                        <h3 className="benefits-item__title sub-h">онлайн оплата</h3>
                        <p className="benefits-item__desc t3 ">Для зручності ви можете сплатити товар банківською
                            карткою через сайт</p>
                        <Link to="#" className="benefits-item__link t1">Детальніше</Link>
                    </div>
                </div>
                <picture>
                    <source
                        srcSet="/images/main/benefits/side_block@1x.avif, /images/main/benefits/side_block@2x.avif 2x"
                        type="image/avif"
                    />
                    <img
                        src="/images/main/benefits/side_block@1x.webp"
                        srcSet="/images/main/benefits/side_block@2x.webp 2x"
                        alt="текстура"
                        className="benefits-side-block"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Benefits;