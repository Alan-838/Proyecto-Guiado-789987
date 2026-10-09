import { Route, Routes } from "react-router-dom";
// import Products from "../pages/Products";
// import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Login";
import AppOutlet from "./AppOutlet";
import { lazy } from "react";

const Products = lazy(() => import("../pages/Products"));
const SingleProduct = lazy(() => import("../pages/SingleProduct"));

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<AppOutlet />}>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SingleProduct />} />
            </Route>

            <Route path="/" element={<Login />} />

        </Routes>
    )
};

export default AppRouter;