import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    )
};

export default AppRouter;