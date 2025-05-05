import ItemsSection from "../../../components/ItemsSection.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {useEffect} from "react";
import {getOutfitItems} from "../../../redux/slices/shop/asyncThunks.ts";

const Outfit = () => {
    const outfitItems = useAppSelector(state => state.shop.outfitItems);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (outfitItems === null) {
            dispatch(getOutfitItems());
        }
    }, []);

    return (
        <ItemsSection
            items={outfitItems}
            title="спорядження"
            viewAllLink="#"
            className="section_outfit"
        />
    );
};

export default Outfit;