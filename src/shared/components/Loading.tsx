import { Box } from "@chakra-ui/react";
import { PacmanLoader } from "react-spinners";

const Loading = () => {
    return (
        <Box  width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center" >
            <PacmanLoader color="#36d7b7"/>
        </Box>
    )
};

export default Loading
