import {Navigate, Outlet} from "react-router-dom";

const AppOutlet = () => {
    const token = localStorage.getItem("token");

    // Se puede hacer con el if
    // if (token) {
    //     return <Outlet />
    // } else
    //     return <Navigate to="/" />

    // O con el ternario
    return (
        token ? <Outlet /> : <Navigate to="/" />
    )
};

export default AppOutlet;