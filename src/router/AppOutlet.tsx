import Loading from "@components/Loading";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AppOutlet = () => {
    const token = localStorage.getItem("token");

    // Se puede hacer con el if
    // if (token) {
    //     return <Outlet />
    // } else
    //     return <Navigate to="/" />

    // O con el ternario
    return (
        <>
            {
                token ? 
                <Suspense fallback={<Loading />} >
                    <Outlet />
                </Suspense> 
                : 
                <Navigate to="/" />
            }
        </>
    )
};

export default AppOutlet;