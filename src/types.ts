export interface IReview {
    preview: string,
    date: number,
    hashtags: string[],
    body: string,
}

interface ICountry {
    name: string,
    isoCode: string;
    flag: string,
}

export interface IContacts {
    telephone: string,
    address: {
        city: string,
        street1: string,
        street2: string,
    },
    email: string,
    workTime: {
        start: string,
        end: string,
    },
}

export interface IShopItem {
    id: number,
    title: string,
    price: number,
    available: boolean,
    country: ICountry,
    brand: string,
    category: string,
    material: string,
    color: string,
    preview: string,
    photos: string[],
}

export interface IOutfitItem extends  IShopItem {}

export interface ICategory {
    id: number,
    name: string,
    preview: string,
}

export interface IShopState {
    newItems: IShopItem[] | null,
    categories: ICategory[] | null,
    bestItems: IShopItem[] | null,
    outfitItems: IOutfitItem[] | null,
    reviews: IReview[] | null,
}



