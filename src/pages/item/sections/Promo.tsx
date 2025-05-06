import Breadcrumbs, {BreadcrumbsItem} from "../../../components/Breadcrumbs.tsx";
import {useAppSelector} from "../../../hooks.ts";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from "../../../components/Container.tsx";
import Button from "../../../components/ui/Button.tsx";
import CountSelect from "../../../components/ui/CountSelect.tsx";

const Promo = () => {
    const productInfo = useAppSelector(state => state.shop.itemFullInfo);
    const [openLightbox, setOpenLightbox] = useState(false);
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [itemsCount, setItemsCount] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (productInfo) {
            if (productInfo.availableSizes.length) {
                setSelectedSize(productInfo.availableSizes[0]);
            }

            if (productInfo.availableColors.length) {
                setSelectedColor(productInfo.availableColors[0]);
            }

            setIsFavorite(productInfo.isFavorite);
        }
    }, [productInfo]);

    const handleChangeIsFavorite = () => {
        setIsFavorite(prev => !prev);
    }

    return (
        productInfo ?
            <section className="promo">
                <Container>
                    <Breadcrumbs>
                        <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                        <BreadcrumbsItem link="/catalog">Велосипеди</BreadcrumbsItem>
                        <BreadcrumbsItem link="/catalog">Гірські велосипеди</BreadcrumbsItem>
                        <BreadcrumbsItem isActive={true}>{productInfo.title}</BreadcrumbsItem>
                    </Breadcrumbs>
                    <Lightbox
                        plugins={[Thumbnails]}
                        open={openLightbox}
                        close={() => setOpenLightbox(false)}
                        index={activePhotoIndex}
                        slides={
                            productInfo.photos.map(path => ({
                                src: path
                            }))
                        }
                    />
                    <div className="promo-cols">
                        <div className="promo-col preview">
                            <div
                                className="preview__active"
                                onClick={() => setOpenLightbox(true)}
                            >
                                <img src={productInfo.photos[activePhotoIndex]} alt="preview"/>
                            </div>
                            <div className="preview__thumbnails">
                                <Swiper
                                    modules={[Navigation]}
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    navigation
                                >
                                    {
                                        productInfo.photos.map((src, index) => (
                                            <SwiperSlide
                                                key={index}
                                                onClick={() => setActivePhotoIndex(index)}
                                                className={activePhotoIndex === index ? "_active" : ""}
                                            >
                                                <img
                                                    src={src} alt="slide"
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                        <div className="promo-col main">
                            <h3>{productInfo.title}</h3>
                            <div className="promo-row">
                                <div className="col">
                                    <div className="brand t5">{productInfo.brand}</div>
                                    <div className="article t5">Артикул: {productInfo.articleId}</div>
                                    <div className={`in-stock t2 ${productInfo.available ? "" : "_not-available"}`}>
                                        {productInfo.available ? "В наявності" : "Немає в наявності"}
                                    </div>
                                </div>
                                <div className="col social-links">
                                    <a href="#" target="_blank" className="telegram" title="telegram">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="21" height="21" rx="10.5" fill="#E5E5E5"/>
                                            <path
                                                d="M14.6996 6.61622L13.1218 14.8535C13.1218 14.8535 12.901 15.4246 12.2945 15.1507L8.65401 12.2602L8.63713 12.2516C9.12888 11.7944 12.9421 8.24395 13.1088 8.08301C13.3668 7.83376 13.2066 7.68538 12.9071 7.87366L7.27443 11.5779L5.10137 10.8207C5.10137 10.8207 4.75939 10.6947 4.7265 10.4208C4.69316 10.1465 5.11262 9.99809 5.11262 9.99809L13.9715 6.39925C13.9715 6.39925 14.6996 6.06796 14.6996 6.61622Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" className="viber" title="viber">
                                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="21" rx="10.5" fill="#E5E5E5"/>
                                            <path
                                                d="M15.3598 6.33279C14.2732 5.29919 12.8244 4.72498 11.2951 4.72498C8.11585 4.72498 5.54024 7.17498 5.54024 10.1992C5.54024 11.1562 5.82195 12.1133 6.30488 12.9172L5.5 15.75L8.55854 14.9844C9.40366 15.4054 10.3293 15.6351 11.2951 15.6351C14.4744 15.6351 17.05 13.1851 17.05 10.1609C17.0098 8.74451 16.4463 7.36638 15.3598 6.33279ZM14.072 12.1515C13.9512 12.4578 13.3878 12.764 13.1061 12.8023C12.8646 12.8406 12.5427 12.8406 12.2207 12.764C12.0195 12.6875 11.7378 12.6109 11.4159 12.4578C9.96707 11.8836 9.04146 10.5054 8.96098 10.3906C8.88049 10.314 8.35732 9.66326 8.35732 8.97419C8.35732 8.28513 8.71951 7.97888 8.84024 7.82576C8.96098 7.67263 9.12195 7.67263 9.24268 7.67263C9.32317 7.67263 9.4439 7.67263 9.52439 7.67263C9.60488 7.67263 9.72561 7.63435 9.84634 7.90232C9.96707 8.17029 10.2488 8.85935 10.289 8.89763C10.3293 8.97419 10.3293 9.05076 10.289 9.12732C10.2488 9.20388 10.2085 9.28044 10.128 9.35701C10.0476 9.43357 9.96707 9.54841 9.92683 9.58669C9.84634 9.66326 9.76585 9.73982 9.84634 9.85466C9.92683 10.0078 10.2085 10.4289 10.6512 10.8117C11.2146 11.2711 11.6573 11.4242 11.8183 11.5008C11.9793 11.5773 12.0598 11.539 12.1402 11.4625C12.2207 11.3859 12.5024 11.0797 12.5829 10.9265C12.6634 10.7734 12.7841 10.8117 12.9049 10.85C13.0256 10.8883 13.75 11.2328 13.8707 11.3094C14.0317 11.3859 14.1122 11.4242 14.1524 11.4625C14.1927 11.5773 14.1927 11.8453 14.072 12.1515Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                    <a href="#" target="_blank" className="whatsapp" title="whatsapp">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="21" height="21" rx="10.5" fill="#E5E5E5"/>
                                            <path
                                                d="M13.7833 5.01158C11.7823 4.62944 9.70425 4.62944 7.70321 5.01158C6.81813 5.20265 5.70216 6.27264 5.50975 7.11335C5.16342 8.75655 5.16342 10.438 5.50975 12.0812C5.74064 12.9219 6.85661 13.9919 7.70321 14.1829C7.74169 14.1829 7.78017 14.2211 7.78017 14.2594V16.6668C7.78017 16.7815 7.9341 16.8579 8.01106 16.7433L9.16551 15.5586C9.16551 15.5586 10.0891 14.6033 10.243 14.4504C10.243 14.4504 10.2815 14.4122 10.32 14.4122C11.4744 14.4504 12.6673 14.3358 13.8218 14.1447C14.7069 13.9536 15.8228 12.8837 16.0152 12.0429C16.3616 10.3997 16.3616 8.71833 16.0152 7.07513C15.7844 6.27264 14.6684 5.20265 13.7833 5.01158ZM13.8218 12.1958C13.6294 12.5779 13.3985 12.8837 13.0137 13.0747C12.8982 13.1129 12.7828 13.1512 12.6673 13.1894C12.5134 13.1512 12.398 13.1129 12.2825 13.0747C11.0511 12.5779 9.89666 11.8901 8.9731 10.8965C8.47284 10.3233 8.04954 9.67368 7.70321 8.98583C7.54928 8.64191 7.39535 8.33619 7.27991 7.99227C7.16446 7.68656 7.35687 7.38085 7.54928 7.15156C7.74169 6.92228 7.97258 6.76942 8.24195 6.65478C8.43436 6.54014 8.62677 6.61657 8.78069 6.76942C9.08855 7.15156 9.3964 7.5337 9.62729 7.95405C9.78122 8.22155 9.74273 8.52726 9.47336 8.71833C9.3964 8.75655 9.35792 8.79476 9.28095 8.87119C9.24247 8.9094 9.16551 8.94762 9.12703 9.02404C9.05006 9.13869 9.05006 9.25333 9.08855 9.36797C9.3964 10.2469 9.97362 10.9347 10.8587 11.3169C11.0126 11.3933 11.1281 11.4315 11.3205 11.4315C11.5899 11.3933 11.7053 11.0876 11.8977 10.9347C12.0901 10.7819 12.321 10.7819 12.5519 10.8965C12.7443 11.0112 12.9367 11.164 13.1676 11.3169C13.36 11.4697 13.5524 11.5844 13.7448 11.7372C13.8603 11.8137 13.8988 12.0047 13.8218 12.1958ZM12.2056 9.32976C12.1286 9.32976 12.1671 9.32976 12.2056 9.32976C12.0516 9.32976 12.0132 9.25333 11.9747 9.13869C11.9747 9.06226 11.9747 8.94762 11.9362 8.87119C11.8977 8.71833 11.8207 8.56548 11.6668 8.45084C11.5899 8.41262 11.5129 8.37441 11.4359 8.33619C11.3205 8.29798 11.2435 8.29798 11.1281 8.29798C11.0126 8.25977 10.9741 8.18334 10.9741 8.0687C10.9741 7.99227 11.0896 7.91584 11.1666 7.91584C11.7823 7.95406 12.244 8.29798 12.321 9.02404C12.321 9.06226 12.321 9.13869 12.321 9.1769C12.321 9.25333 12.2825 9.32976 12.2056 9.32976ZM11.8207 7.64834C11.6283 7.57192 11.4359 7.49549 11.205 7.45727C11.1281 7.45727 11.0126 7.41906 10.9357 7.41906C10.8202 7.41906 10.7433 7.34263 10.7817 7.22799C10.7817 7.11335 10.8587 7.03692 10.9741 7.07513C11.359 7.11335 11.7053 7.18978 12.0516 7.34263C12.7443 7.68656 13.1291 8.25977 13.2446 9.02404C13.2446 9.06226 13.2446 9.10047 13.2446 9.13869C13.2446 9.21512 13.2446 9.29154 13.2446 9.40618C13.2446 9.4444 13.2446 9.48261 13.2446 9.52083C13.2061 9.67368 12.9367 9.7119 12.8982 9.52083C12.8982 9.48261 12.8598 9.40619 12.8598 9.36797C12.8598 9.02405 12.7828 8.68012 12.6289 8.37441C12.398 8.03048 12.1286 7.8012 11.8207 7.64834ZM13.8988 9.94118C13.7833 9.94118 13.7063 9.82654 13.7063 9.7119C13.7063 9.48261 13.6679 9.25333 13.6294 9.02404C13.4755 7.8012 12.4749 6.80764 11.282 6.61657C11.0896 6.57835 10.8972 6.57835 10.7433 6.54014C10.6278 6.54014 10.4739 6.54014 10.4354 6.38728C10.3969 6.27264 10.5124 6.158 10.6278 6.158C10.6663 6.158 10.7048 6.158 10.7048 6.158C10.7817 6.158 12.2825 6.19621 10.7048 6.158C12.321 6.19621 13.6679 7.2662 13.9372 8.87119C13.9757 9.13869 14.0142 9.40619 14.0142 9.7119C14.0912 9.82654 14.0142 9.94118 13.8988 9.94118Z"
                                                fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="price-row">
                                <div className="price">
                                    {Number(productInfo.price).toLocaleString("ru-RU")} &#x20B4;
                                </div>
                                {
                                    productInfo.oldPrice
                                        ?
                                        <div className="old-price">
                                            {Number(productInfo.oldPrice).toLocaleString("ru-RU")} &#x20B4;
                                        </div>
                                        : null
                                }
                            </div>
                            <div className="promo-desc t2">
                                {productInfo.desc}
                            </div>
                            <div className="size-row">
                                <div className="row__title sub-h2">Розмір:</div>
                                <div className="sizes">
                                    {
                                        productInfo.availableSizes.length ?
                                            productInfo.availableSizes.map((size, index) => (
                                                <div
                                                    key={index}
                                                    className={`size-item t1 ${size === selectedSize ? "_selected" : ""}`}
                                                    onClick={() => setSelectedSize(size)}
                                                >
                                                    {size}
                                                </div>
                                            ))
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="color-row">
                                <div className="row__title sub-h2">Колір:</div>
                                <div className="colors">
                                    {
                                        productInfo.availableColors.length ?
                                            productInfo.availableColors.map((color, index) => (
                                                <div
                                                    key={index}
                                                    className={`color-item ${selectedColor === color ? "_selected" : ""}`}
                                                    style={{backgroundColor: color}}
                                                    onClick={() => setSelectedColor(color)}
                                                >
                                                </div>
                                            ))
                                            : null
                                    }
                                </div>
                            </div>
                            <div className="order-row">
                                <CountSelect
                                    onUp={() => setItemsCount(prev => prev + 1)}
                                    onDown={() => setItemsCount(prev => prev - 1)}
                                    value={itemsCount}
                                    maxCount={productInfo.availableCount}
                                />
                                <Button>До кошика</Button>
                                <button
                                    className={`is-favorite ${isFavorite ? "_selected" : ""}`}
                                    onClick={handleChangeIsFavorite}
                                >
                                    <svg width="29" height="26" viewBox="0 0 29 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2.67757 13.34L14.5 25.4464L26.3224 13.34C27.6367 11.9941 28.375 10.1688 28.375 8.26553C28.375 4.30217 25.2374 1.08923 21.367 1.08923C19.5084 1.08923 17.7259 1.84531 16.4117 3.19112L14.5 5.14876L12.5883 3.19112C11.274 1.84531 9.49156 1.08923 7.63294 1.08923C3.76255 1.08923 0.625 4.30217 0.625 8.26553C0.625 10.1688 1.36333 11.9941 2.67757 13.34Z"
                                            stroke="#F57520" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            : null
    );
};

export default Promo;