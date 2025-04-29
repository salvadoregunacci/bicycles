import Toggle from "../ui/Toggle.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setCatalogFilter} from "../../redux/slices/shopSlice.ts";

const FilterStock = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.shop.catalogFilter);

    return (
        <div className="in-stock">
            <div className="in-stock__title sub-h2">Тільки в наявності</div>
            <Toggle
                checked={filter.onlyInStock}
                onChange={e => {
                    dispatch(setCatalogFilter({
                        ...filter,
                        onlyInStock: e.target.checked
                    }))
                }}
            />
        </div>
    );
};

export default FilterStock;