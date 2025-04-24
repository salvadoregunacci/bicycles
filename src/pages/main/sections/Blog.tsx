import {Link} from "react-router-dom";
import Container from "../../../components/Container.tsx";

const Blog = () => {
    return (
        <section className="section section_blog">
            <Container>
                <h2 className="section-title">Нічого не зможе зупинити вас</h2>
                <div className="blog-preview">
                    <p className="t2">
                        Наша компанія спеціалізується на продажу товарів для велосипедного спорту - велосипедів,
                        запасних частин, аксесуарів та різноманітного спортивного інвентарю для активного спорту та
                        відпочинку.
                    </p>
                    <Link to="#" className="t1 link blog-preview__link">Детальніше</Link>
                </div>
            </Container>
        </section>
    );
};

export default Blog;