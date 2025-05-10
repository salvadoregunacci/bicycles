import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import CatalogPage from "../pages/catalog/CatalogPage.tsx";
import ItemPage from "../pages/item/ItemPage.tsx";
import CartPage from "../pages/cart/CartPage.tsx";
import OrderPage from "../pages/order/OrderPage.tsx";
import ContactsPage from "../pages/contacts/ContactsPage.tsx";
import WorkshopPage from "../pages/workshop/WorkshopPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/catalog",
        element: <CatalogPage/>
    },
    {
        path: "/item/:id",
        element: <ItemPage/>,
    },
    {
        path: "/cart",
        element: <CartPage/>,
    },
    {
        path: "/order",
        element: <OrderPage/>,
    },
    {
        path: "/contacts",
        element: <ContactsPage/>,
    },
    {
        path: "/workshop",
        element: <WorkshopPage/>,
    },
]);