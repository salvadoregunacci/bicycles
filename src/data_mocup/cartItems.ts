import {ICartItem} from "../types.ts";

export const cartItems: ICartItem[] = [
    {
        id: 3,
        title: "Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022",
        price: 51700,
        oldPrice: 54500,
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
        ],
        count: 1,
        maxAvailableCount: 5,
    },
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
        ],
        count: 1,
        maxAvailableCount: 8,
    },
    {
        id: 4,
        title: "Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021",
        price: 3e5,
        oldPrice: null,
        available: true,
        country: {
            name: "Італія",
            isoCode: "IT",
            flag: "/images/flags/it.avif"
        },
        brand: "Bianchi",
        category: "Шосейний велосипед",
        material: "Карбон",
        color: "Голубий",
        preview: "/images/bicycles/bianchi_aquila_l_dura_ace_di2_team_jumbo_2021/img_1.avif",
        photos: [
            "/images/bicycles/bianchi_aquila_l_dura_ace_di2_team_jumbo_2021/img_1.avif",
            "/images/bicycles/bianchi_aquila_l_dura_ace_di2_team_jumbo_2021/img_2.avif",
            "/images/bicycles/bianchi_aquila_l_dura_ace_di2_team_jumbo_2021/img_3.avif",
            "/images/bicycles/bianchi_aquila_l_dura_ace_di2_team_jumbo_2021/img_4.avif",
        ],
        count: 1,
        maxAvailableCount: 4,
    },
]