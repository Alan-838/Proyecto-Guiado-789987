import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DummyEndpoints, type DummySession } from "../shared/declarations/Dummyjson";
import { Box, Button, FormLabel, Input, Stack } from "@chakra-ui/react";
import loginBackground from "@images/login-background.jpg";
import useFetch from "@hooks/useFetch";

const Login = () => {
    const loginForm = useRef(null);
    const navigate = useNavigate();

    const { post } = useFetch(DummyEndpoints.LOGIN);

    const ingresar = async (e: React.MouseEvent) => {
        e.preventDefault()
        // console.log(loginForm.current)

        const formulario = loginForm.current;

        if (formulario) {
            const form = new FormData(formulario);
            const formObject = Object.fromEntries(form.entries());

            const json: DummySession = await post(formObject)

            localStorage.setItem("token", json.accessToken);
            console.log(json)
            navigate("/products")
        }
    }

    return (
        // <div>
        <Stack flexDirection="row" height="100vh">
            <Box width="50%" backgroundImage={loginBackground} backgroundPosition="center" backgroundSize="cover"/>

            <Box width="50%" display="flex" alignItems="center" justifyContent="center">
                <Box backgroundColor="#7DB362" padding="2em" borderRadius="20px">
                    <Box as="form" ref={loginForm} color="#2e272e" display="flex" flexDir="column" gap="1em" >
                        <div className="formGroup">
                            <FormLabel htmlFor="username">Usuario</FormLabel>
                            <Input placeholder='Basic usage' id="username" name="username" type="text" />
                        </div>

                        <div className="formGroup">
                            <FormLabel htmlFor="password">Contraseña</FormLabel>
                            <Input placeholder='Basic usage' id="password" name="password" type="password" />
                        </div>

                        <Button onClick={(e) => ingresar(e)}>Ingresar</Button>
                    </Box>
                </Box>
            </Box>
        </Stack>
        // </div>
    )
};

export default Login;