import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import Loader from "../../../components/ui/Loader.tsx";
import {useEffect} from "react";
import {ICategory} from "../../../types.ts";
import {Link} from "react-router-dom";
import Container from "../../../components/Container.tsx";
import {getCategories} from "../../../redux/slices/shop/asyncThunks.ts";

const CatalogCard = ({name, preview}: ICategory) => {
    return (
        <Link to="/catalog" className="catalog-card">
            <h2>{name}</h2>
            <img src={preview} alt="catalog preview"/>
        </Link>
    );
}
const Catalog = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.shop.categories);

    useEffect(() => {
        if (categories === null) {
            dispatch(getCategories());
        }
    }, [])

    return (
        <section className="section section_catalog">
            <Container>
                <h2 className="section-title">Каталог</h2>
                {
                    categories ?
                        categories.length ?
                            <div className="catalog-wrap">
                                {
                                    categories.map(cat => (
                                        <CatalogCard
                                            key={crypto.randomUUID()}
                                            id={cat.id}
                                            name={cat.name}
                                            preview={cat.preview}
                                        />
                                    ))
                                }
                            </div>
                            :
                            <div className="empty-label">Пусто</div>
                        :
                        <Loader className="catalog-loader"/>
                }
            </Container>
        </section>
    );
};

export default Catalog;