import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import CatalogPage from "../pages/catalog/CatalogPage.tsx";
import ItemPage from "../pages/item/ItemPage.tsx";
import CartPage from "../pages/cart/CartPage.tsx";
import OrderPage from "../pages/order/OrderPage.tsx";
import ContactsPage from "../pages/contacts/ContactsPage.tsx";
import WorkshopPage from "../pages/workshop/WorkshopPage.tsx";
import AboutPage from "../pages/about/AboutPage.tsx";
import AgreementPage from "../pages/agreement/AgreementPage.tsx";
import SafeguardsPage from "../pages/safeguards/SafeguardsPage.tsx";
import StoringPage from "../pages/storing/StoringPage.tsx";
import DeliveryPage from "../pages/delivery/DeliveryPage.tsx";
import BlogPage from "../pages/blog/BlogPage.tsx";
import BlogItemPage from "../pages/blogItem/BlogItemPage.tsx";
import AccountPage from "../pages/account/AccountPage.tsx";
import PersonalData from "../pages/account/sections/PersonalData.tsx";
import Wishlist from "../pages/account/sections/Wishlist.tsx";
import {Navigate} from 'react-router-dom';
import OrderHistory from "../pages/account/sections/OrderHistory.tsx";
import ChangePassword from "../pages/account/sections/ChangePassword.tsx";

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
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/agreement",
        element: <AgreementPage/>,
    },
    {
        path: "/safeguards",
        element: <SafeguardsPage/>,
    },
    {
        path: "/storing",
        element: <StoringPage/>,
    },
    {
        path: "/delivery",
        element: <DeliveryPage/>,
    },
    {
        path: "/blog",
        element: <BlogPage/>,
    },
    {
        path: "/blog-item",
        element: <BlogItemPage/>,
    },
    {
        path: "/account",
        element: <AccountPage/>,
        children: [
            {
                index: true,
                element: <Navigate to="personal_data" replace/>
            },
            {
                path: "personal_data",
                element: <PersonalData/>
            },
            {
                path: "wishlist",
                element: <Wishlist/>
            },
            {
                path: "order_history",
                element: <OrderHistory/>
            },
            {
                path: "change_password",
                element: <ChangePassword/>
            },
        ]
    }
]);