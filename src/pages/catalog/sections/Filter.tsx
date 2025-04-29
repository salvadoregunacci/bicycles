import 'rc-slider/assets/index.css';
import FilterPrice from "../../../components/catalogFilter/FilterPrice.tsx";
import FilterEntity from "../../../components/catalogFilter/FilterEntity.tsx";
import FilterStock from "../../../components/catalogFilter/FilterStock.tsx";
import FilterColor from "../../../components/catalogFilter/FilterColor.tsx";
import {useAppDispatch} from "../../../hooks.ts";
import {resetCatalogFilter} from "../../../redux/slices/shopSlice.ts";


const Filter = () => {
    const dispatch = useAppDispatch();

    return (
        <aside className="filter">
            <div className="filter__blocks">
                <FilterStock/>
                <FilterEntity
                    title="Категорії товару"
                    entity="categories"
                    className="category-filter"
                />
                <FilterEntity
                    title="Бренд"
                    entity="brands"
                    className="brand-filter"
                />
                <FilterPrice/>
                <FilterEntity
                    title="Матеріал рами"
                    entity="frameMaterials"
                    className="frame-material-filter"
                />
                <FilterColor/>
            </div>
            <button
                className="filter-reset-btn t1"
                onClick={() => dispatch(resetCatalogFilter())}
            >
                Скинути фільтри
            </button>
        </aside>
    );
};

export default Filter;