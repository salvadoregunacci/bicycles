import {CatalogSortType, CatalogViewType} from "./enums.ts";

export interface IPreviewCard {
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
    oldPrice: number | null,
    available: boolean,
    country: ICountry,
    brand: string,
    category: string,
    material: string,
    color: string,
    preview: string,
    photos: string[],
}

export interface IItemFullInfo extends IShopItem {
    desc: string,
    articleId: string,
    availableSizes: string[],
    availableColors: string[],
    availableCount: number,
    isFavorite: boolean,
    features: { title: string, value: string }[],
    similarItems: IShopItem[] | null,
}

export interface IOutfitItem extends IShopItem {
}

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
    reviews: IPreviewCard[] | null,
    catalogFilter: ICatalogFilter,
    catalogPage: ICatalogPage | null,
    catalogSortBy: CatalogSortType,
    catalogViewType: CatalogViewType,
    oneClickItem: IShopItem | null,
    itemFullInfo: IItemFullInfo | null,
    cartItems: ICartItem[],
    cartSimilarItems: IShopItem[] | null,
    cartTotalPrice: number,
    cartTotalSale: number,
    novaPoshtaApiKey: string,
    blogItems: IPreviewCard[] | null,
    orders: IOrder[] | null,
    wishlist: IShopItem[] | null,
}

export interface IOrder {
    date: number,
    id: number,
    status: "new" | "completed",
    items: IShopItem[],
}

export interface ICartItem extends IShopItem {
    count: number,
    maxAvailableCount: number,
}

export interface IFilterItem {
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

export interface ICatalogPage {
    currentPage: number,
    totalPages: number,
    nextPageUrl: string | null,
    prevPageUrl: string | null,
    data: IShopItem[],
}

export interface ICatalogPagePayload {
    pageNumber: number,
    filter: {
        onlyInStock: boolean,
        categories: string[],
        price: [number, number],
        brands: string[],
        frameMaterials: string[],
        colors: string[],
    }
}

export interface ICity {
    Description: string;
    DescriptionRu: string;
    Ref: string;
    Delivery1: string;
    Delivery2: string;
    Delivery4: string;
    Delivery5: string;
    Delivery3: string;
    Delivery6: string;
    Delivery7: string;
    Area: string;
    SettlementType: string;
    IsBranch: string;
    PreventEntryNewStreetsUser: string;
    Conglomerates: string;
    CityID: string;
    SettlementTypeDescriptionRu: string;
    SettlementTypeDescription: string;
}

export interface ICityApiResponse {
    data: ICity[];
}

interface IDimensions {
    [key: string]: any;
}

interface ISchedule {
    [key: string]: any;
}

export interface IWarehouse {
    SiteKey: string;
    Description: string;
    DescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    Phone: string;
    TypeOfWarehouse: string;
    Ref: string;
    Number: string;
    CityRef: string;
    CityDescription: string;
    CityDescriptionRu: string;
    SettlementRef: string;
    SettlementDescription: string;
    SettlementAreaDescription: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    Longitude: number;
    Latitude: number;
    PostFinance: string;
    BicycleParking: string;
    PaymentAccess: string;
    POSTerminal: string;
    InternationalShipping: string;
    SelfServiceWorkplacesCount: string;
    TotalMaxWeightAllowed: string;
    PlaceMaxWeightAllowed: string;
    SendingLimitationsOnDimensions: IDimensions;
    ReceivingLimitationsOnDimensions: IDimensions;
    Reception: ISchedule;
    Delivery: ISchedule;
    Schedule: ISchedule;
    DistrictCode: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    CategoryOfWarehouse: string;
    RegionCity: string;
    WarehouseForAgent: string;
    MaxDeclaredCost: string;
    DenyToSelect: string;
    PostMachineType: "None" | "FullDayService" | "PartTime" | "ForResidentOfEntrance" | "Private" | "LimitedAccess";
    PostalCodeUA: string;
    OnlyReceivingParcel: string;
    WarehouseIndex: string;
}

export interface IWarehouseApiResponse {
    data: IWarehouse[],
}

export type DeliveryMethod = "novaposhta" | "courier";
export type PayMethod = "receipt" | "card";

export interface IOrderInfo {
    firstname: string,
    lastname: string,
    telephone: string,
    email: string,
    address: string,
    searchCity: string,
    selectedCity: string,
    cityList: string[],
    searchWarehouse: string,
    selectedWarehouse: string,
    warehouseList: string[],
    deliveryMethod: DeliveryMethod,
    payMethod: PayMethod,
}

export type DeliveryRequiredField = keyof Pick<IOrderInfo, "firstname" | "lastname" | "telephone" | "address" | "selectedCity" | "selectedWarehouse">
export type DeliveryErrors = Partial<Record<DeliveryRequiredField, string>>;
export interface IOrderState extends IOrderInfo {
    deliveryErrors: DeliveryErrors,
}

export type DebounceFn = <T extends (...args: any[]) => any>(
    func: T,
    delay: number
) => (...args: Parameters<T>) => any;