import Container from "../../../components/Container.tsx";

interface IBrandCard {
    title: string,
    items: string[],
}

const BrandCard = ({title, items}: IBrandCard) => {
    return (
        <div className="brand-card">
            <div className="brand-card__title h2">{title}</div>
            <div className="brand-card__items">
                {
                    items.map((item, index) => (
                        <span key={index} className="item sub-h3">{item}</span>
                    ))
                }
            </div>
        </div>
    );
};

const Brands = () => {
    const cards: IBrandCard[] = [
        {
            title: "Велосипеди",
            items: [
                "BMC", "Cervelo", "Cipollini", "Colnago", "Early Rider", "Giant",
                "Look", "Orbea", "Pinarello", "Scott", "Wilier", "Officine Mattio",
            ],
        },
        {
            title: "Аксесуари",
            items: [
                "SKS", "Selle Royal", "Elite", "Crank Brothers", "Early Rider", "Scicon",
                "Garmin", "Look", "Wellgo", "Pedros", "Fizik", "Blackburn", "Sigma sport", "Tacx",
            ],
        },
        {
            title: "Запчастини",
            items: [
                "Campagnolo", "Lightweight", "Shimano", "Mavic", "Fox", "Continental",
                "Vittoria", "Tufo", "Easton", "Astute", "Sram", "Rohloff", "3T",
            ],
        },
    ]

    return (
        <div className="brands">
            <Container>
                <div className="brands-title h2">Ми &mdash; офіційні дилери найкращих брендів:</div>
            </Container>
            <div className="brand-cards">
                {
                    cards.map((card, index) => (
                        <BrandCard
                            key={index}
                            title={card.title}
                            items={card.items}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Brands;