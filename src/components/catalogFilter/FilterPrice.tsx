import FilterBlock from "./FilterBlock.tsx";
import Range from "rc-slider";
import {useCallback, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setCatalogFilter} from "../../redux/slices/shopSlice.ts";

const FilterPrice = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.shop.catalogFilter);
    const currency = useAppSelector(state => state.shop.currency);
    const [visibleMinPriceInput, setVisibleMinPriceInput] = useState(false);
    const [visibleMaxPriceInput, setVisibleMaxPriceInput] = useState(false);
    const minPriceInputRef = useRef<HTMLInputElement>(null);
    const maxPriceInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (visibleMinPriceInput && minPriceInputRef.current) {
            minPriceInputRef.current.focus();
        }

        if (visibleMaxPriceInput && maxPriceInputRef.current) {
            maxPriceInputRef.current.focus();
        }
    }, [visibleMinPriceInput, visibleMaxPriceInput]);

    const handleKeydownDocument = useCallback((e: KeyboardEvent) => {
        if ((visibleMaxPriceInput || visibleMinPriceInput) && e.code === "Enter") {
            minPriceInputRef.current?.blur();
            maxPriceInputRef.current?.blur();
        }
    }, [visibleMaxPriceInput, visibleMinPriceInput]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeydownDocument);

        return () => {
            document.removeEventListener("keydown", handleKeydownDocument);
        };
    }, [handleKeydownDocument]);

    return (
        <FilterBlock title="Ціна" className="price-filter">
            <div className="price-wrap">
                <Range
                    range
                    min={0}
                    max={100000}
                    value={[filter.price.min, filter.price.max]}
                    onChange={(value) => {
                        const [min, max] = value as number[];

                        dispatch(setCatalogFilter({
                            ...filter,
                            price: {min, max}
                        }));
                    }}
                />
                <div className="price-display">
                    <div
                        onClick={() => setVisibleMinPriceInput(true)}
                        className={`price-display__value min t2 ${visibleMinPriceInput ? "_focus" : ""}`}
                    >
                        {
                            visibleMinPriceInput ?
                                <input
                                    ref={minPriceInputRef}
                                    type="text"
                                    onBlur={() => setVisibleMinPriceInput(false)}
                                    value={filter.price.min.toLocaleString('ru-RU')}
                                    onChange={e => {
                                        dispatch(setCatalogFilter({
                                            ...filter,
                                            price: {
                                                min: +(e.target.value.replace(/\s/g, "")),
                                                max: filter.price.max,
                                            }
                                        }));
                                    }}
                                />
                                :
                                <span className="value">
                                        {filter.price.min.toLocaleString('ru-RU')}
                                    </span>
                        }
                        <span className="currency">{currency}</span>
                    </div>
                    <div>-</div>
                    <div
                        onClick={() => setVisibleMaxPriceInput(true)}
                        className={`price-display__value min t2 ${visibleMaxPriceInput ? "_focus" : ""}`}
                    >
                        {
                            visibleMaxPriceInput ?
                                <input
                                    ref={maxPriceInputRef}
                                    type="text"
                                    onBlur={() => setVisibleMaxPriceInput(false)}
                                    value={filter.price.max.toLocaleString('ru-RU')}
                                    onChange={e => {
                                        dispatch(setCatalogFilter({
                                            ...filter,
                                            price: {
                                                min: filter.price.min,
                                                max: +(e.target.value.replace(/\s/g, "")),
                                            }
                                        }));
                                    }}
                                />
                                :
                                <span className="value">
                                        {filter.price.max.toLocaleString('ru-RU')}
                                    </span>
                        }
                        <span className="currency">{currency}</span>
                    </div>
                </div>
            </div>
        </FilterBlock>
    );
};

export default FilterPrice;