import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/main/MainPage.tsx";
import CatalogPage from "../pages/catalog/CatalogPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path: "/catalog",
        element: <CatalogPage/>
    }
]);