import Navbar from "@components/Navbar";
import type { ReactElement } from "react";


const BaseLayout = ({ children }: {children: ReactElement}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
};

export default BaseLayout;