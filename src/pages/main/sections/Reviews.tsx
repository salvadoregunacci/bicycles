import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard} from "swiper/modules";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {useEffect} from "react";
import PreviewCard from "../../../components/PreviewCard.tsx";
import "swiper/css";
import {Link} from "react-router-dom";
import Container from "../../../components/Container.tsx";
import {getReviews} from "../../../redux/slices/shop/asyncThunks.ts";

const Reviews = () => {
    const dispatch = useAppDispatch();
    const reviews = useAppSelector(state => state.shop.reviews);

    useEffect(() => {
        if (reviews === null) {
            dispatch(getReviews());
        }
    }, []);

    return (
        <section className="section section_reviews">
            <Container>
                <h2>Останні відгуки</h2>
            </Container>
            {
                reviews ?
                    <>
                        <div className="reviews-slider__wrap">
                            <Swiper
                                className="reviews-slider"
                                spaceBetween={40}
                                slidesPerView={3.6}
                                modules={[Keyboard]}
                                keyboard={{enabled: true}}
                            >
                                {
                                    reviews.map((review, index) => (
                                        <SwiperSlide key={index}>
                                            <PreviewCard
                                                preview={review.preview}
                                                date={review.date}
                                                hashtags={review.hashtags}
                                                body={review.body}
                                                link="#"
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        <Link to="#" className="view-all-btn t4 view-all-btn_reviews">Показати все</Link>
                    </>
                    :
                    <div className="empty-label">Пусто</div>
            }
        </section>
    );
};

export default Reviews;