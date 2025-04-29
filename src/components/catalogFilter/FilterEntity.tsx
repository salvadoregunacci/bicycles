import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {useState} from "react";
import FilterBlock from "./FilterBlock.tsx";
import Checkbox from "../ui/Checkbox.tsx";
import {setCatalogFilter} from "../../redux/slices/shopSlice.ts";
import {ICatalogFilter} from "../../types.ts";

interface IProps {
    title: string,
    entity: keyof ICatalogFilter,
    className?: string,
}

const FilterEntity = ({title, entity, className = ""}: IProps) => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.shop.catalogFilter);
    const [isShowMore, setIsShowMore] = useState(false);
    const items = isShowMore
        ? Object.keys(filter[entity])
        : Object.keys(filter[entity]).slice(0, 5);

    const currentEntity = filter[entity] as Record<string, { title: string; value: boolean }>;

    return (
        <FilterBlock
            title={title}
            className={className}
            isShowMoreBtn={Object.keys(filter[entity])?.length > 5}
            onClickMore={() => setIsShowMore(prev => !prev)}
        >
            {
                Object.keys(currentEntity) ?
                    items.map((key, index) => {
                        const entityItemKey = key as keyof typeof currentEntity;

                        return (
                            <Checkbox
                                key={index}
                                checked={currentEntity[entityItemKey].value}
                                onChange={e => {
                                    dispatch(setCatalogFilter({
                                        ...filter,
                                        [entity]: {
                                            ...currentEntity,
                                            [key]: {
                                                ...currentEntity[entityItemKey],
                                                value: e.target.checked,
                                            }
                                        }
                                    }))
                                }}
                            >
                                {currentEntity[entityItemKey].title}
                            </Checkbox>
                        )
                    })
                    :
                    <div>пусто</div>
            }
        </FilterBlock>
    );
};

export default FilterEntity;