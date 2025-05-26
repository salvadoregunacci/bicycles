import {IOrder} from "../types.ts";

export const ordersItems: IOrder[] = [
    {
        date: 1748233721,
        id: 789564679,
        status: "new",
        items: [
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
                brand: "Bianchi",
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
            {
                id: 12,
                title: "Scott 700 SL 2014",
                price: 46500,
                oldPrice: null,
                available: true,
                country: {
                    name: "Іспанія",
                    isoCode: "ES",
                    flag: "/images/flags/es.avif",
                },
                brand: "cipolini",
                category: "mountain",
                material: "steel",
                color: "#FE7E56",
                preview: "/images/bicycles/scott_scale_700_sl_2016/img_1.avif",
                photos: [
                    "/images/bicycles/scott_scale_700_sl_2016/img_1.avif",
                    "",
                    "",
                    "",
                ],
            },
        ],
    },
    {
        date: 1745327736,
        id: 789564875,
        status: "completed",
        items: [
            {
                id: 11,
                title: "Trek Marlin 4 Aloha ATB 27.5 2022",
                price: 82000,
                oldPrice: null,
                available: true,
                country: {
                    name: "Америка",
                    isoCode: "US",
                    flag: "/images/flags/us.avif",
                },
                brand: "trek",
                category: "mountain",
                material: "aluminum",
                color: "#38D5C8",
                preview: "/images/bicycles/trek_marlin_4_aloha_atb_27_5_2022/img_1.avif",
                photos: [
                    "/images/bicycles/trek_marlin_4_aloha_atb_27_5_2022/img_1.avif",
                    "",
                    "",
                    "",
                ],
            },
        ],
    },
];