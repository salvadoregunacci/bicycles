import {Link} from "react-router-dom";

type CardProps = {
    link: string,
    children: string
}

const PromoCard = ({children, link}: CardProps) => {
    return (
        <div className="promo-card">
            <div className="promo-card__content">
                <div className="promo-card__text">
                    {children}
                </div>
                <Link to={link} className="promo-card__action t1">Детальніше</Link>
            </div>
        </div>
    )
}

const PromoCards = () => {
    return (
        <div className="promo-cards">
            <div className="container">
                <PromoCard link="#">
                    Екстремальне водіння на гірському велосипеді
                </PromoCard>
                <PromoCard link="#">
                    Велосипеди для професіоналів
                </PromoCard>
                <PromoCard link="#">
                    Довга поїздка на шосейному велосипеді
                </PromoCard>
            </div>
        </div>
    );
};

export default PromoCards;