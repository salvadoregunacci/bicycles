import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import ColorPick from "../ui/ColorPick.tsx";
import FilterBlock from "./FilterBlock.tsx";
import {setCatalogFilter} from "../../redux/slices/shopSlice.ts";

const FilterColor = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.shop.catalogFilter);

    const handleChangeColor = (selectedColor: string)=> {
        dispatch(setCatalogFilter({
            ...filter,
            colors: filter.colors.map(colorItem => {
                if (selectedColor === colorItem.value) {
                    return {
                        value: colorItem.value,
                        isSelected: !colorItem.isSelected,
                    }
                }

                return colorItem;
            })
        }))
    }

    return (
        <FilterBlock
            title="Колір"
            className="filter-color"
        >
            <ColorPick
                colors={filter.colors}
                onChange={handleChangeColor}
            />
        </FilterBlock>
    );
};

export default FilterColor;