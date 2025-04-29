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
    currency: string,
    newItems: IShopItem[] | null,
    categories: ICategory[] | null,
    bestItems: IShopItem[] | null,
    outfitItems: IOutfitItem[] | null,
    reviews: IReview[] | null,
    catalogFilter: ICatalogFilter,
}

interface IFilterItem {
    value: boolean,
    title: string,
}

export interface IColor {
    value: string,
    isSelected: boolean,
}

export interface ICatalogFilter {
    onlyInStock: boolean,
    categories: Record<string, IFilterItem>,
    price: {
        min: number,
        max: number,
    },
    brands: Record<string, IFilterItem>,
    frameMaterials: Record<string, IFilterItem>,
    colors: IColor[],
}



