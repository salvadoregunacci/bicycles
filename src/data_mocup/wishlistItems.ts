import {IShopItem} from "../types.ts";

export const wishlistItems: IShopItem[] = [
    {
        id: 2,
        title: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
        price: 4e4,
        oldPrice: null,
        available: false,
        country: {
            name: "Америка",
            isoCode: "US",
            flag: "/images/flags/us.avif"
        },
        brand: "Aquila",
        category: "Жіночий велосипед",
        material: "Алюміній",
        color: "Чорний",
        preview: "/images/bicycles/trek_verve_2_disc_lithium_grey_hybd_2022/img_1.avif",
        photos: [
            "/images/bicycles/trek_verve_2_disc_lithium_grey_hybd_2022/img_1.avif",
            "/images/bicycles/trek_verve_2_disc_lithium_grey_hybd_2022/img_2.avif",
            "/images/bicycles/trek_verve_2_disc_lithium_grey_hybd_2022/img_3.avif",
            "/images/bicycles/trek_verve_2_disc_lithium_grey_hybd_2022/img_4.avif",
        ]
    },
    {
        id: 3,
        title: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
        price: 51700,
        oldPrice: null,
        available: true,
        country: {
            name: "Америка",
            isoCode: "US",
            flag: "/images/flags/us.avif"
        },
        brand: "Trek",
        category: "Гірський велосипед",
        material: "Карбон",
        color: "Сірий",
        preview: "/images/bicycles/trek_marlin_7_matte_nautical_navy_matte_anth_atb_29_2022/img_1.avif",
        photos: [
            "/images/bicycles/trek_marlin_7_matte_nautical_navy_matte_anth_atb_29_2022/img_1.avif",
            "/images/bicycles/trek_marlin_7_matte_nautical_navy_matte_anth_atb_29_2022/img_2.avif",
            "/images/bicycles/trek_marlin_7_matte_nautical_navy_matte_anth_atb_29_2022/img_3.avif",
            "/images/bicycles/trek_marlin_7_matte_nautical_navy_matte_anth_atb_29_2022/img_4.avif",
        ]
    },
];