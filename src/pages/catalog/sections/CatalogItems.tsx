import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {useEffect, useState} from "react";
import {getCatalogPage} from "../../../redux/slices/shopSlice.ts";
import ItemCard from "../../../components/ItemCard.tsx";
import Pagination from "../../../components/Pagination.tsx";
import {ICatalogFilter, IFilterItem} from "../../../types.ts";


const CatalogItems = () => {
    const dispatch = useAppDispatch();
    const catalogPage = useAppSelector(state => state.shop.catalogPage);
    const filter = useAppSelector(state => state.shop.catalogFilter);
    const [pageNumber, setPageNumber] = useState(1);

    const getFilteredItems = (entityName: string, filter: ICatalogFilter): string[] => {
        const entity = entityName as keyof typeof filter;
        const items: string[] = [];
        const filterSection = filter[entity];

        if (
            typeof filterSection === "object" &&
            filterSection !== null &&
            !Array.isArray(filterSection) &&
            "value" in Object.values(filterSection)[0]
        ) {
            const section = filterSection as Record<string, IFilterItem>;

            for (const key in section) {
                const item = section[key];
                if (item.value) {
                    items.push(key);
                }
            }
        }

        return items;
    }

    const getCompletedFilter = () => {
        const categories: string[] = getFilteredItems("categories", filter);
        const brands: string[] = getFilteredItems("brands", filter);
        const frameMaterials: string[] = getFilteredItems("frameMaterials", filter);
        const colors: string[] = [];

        if (filter.colors.length) {
            filter.colors.forEach(color => {
                if (color.isSelected) {
                    colors.push(color.value);
                }
            });
        }

        return {
            onlyInStock: filter.onlyInStock,
            price: [filter.price.min, filter.price.max] as [number, number],
            categories,
            brands,
            frameMaterials,
            colors,
        }
    }

    const handleChangePage = (page: number) => {
        setPageNumber(page);
    }

    useEffect(() => {
        dispatch(getCatalogPage({
            pageNumber,
            filter: getCompletedFilter()
        }));
    }, [filter, pageNumber]);


    return (
        catalogPage && catalogPage.data ?
            <div className="catalog-items">
                {
                    catalogPage.data.map((item, index) => (
                        <ItemCard
                            key={index}
                            item={item}
                        />
                    ))
                }
                {
                    catalogPage.totalPages > 1 ?
                        <div className="catalog-pagination-row">
                            <Pagination
                                className="catalog-pagination"
                                currentPage={catalogPage.currentPage}
                                totalPages={catalogPage.totalPages}
                                onChange={handleChangePage}
                            />
                        </div>
                        :
                        null
                }
            </div>
            :
            <div className="empty-label h2">пусто</div>
    );
};

export default CatalogItems;