import { useRef, type ReactElement } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Image, Input, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { LuCircleUserRound, LuShoppingCart } from "react-icons/lu";

// import logo from "../../../public/my-logo.png";
//La carpeta public en React se trata commo raiz
import logo from "/my-logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NavLink = ({ icon, text, ref, onClick }: {
    icon: ReactElement,
    text: string,
    onClick?: () => void,
    ref?: React.Ref<HTMLAnchorElement>
    // ref: RefObject<unknown>
}) => {
    return (
        <Link ref={ref} onClick={onClick} display="flex" gap="10px" alignItems="center"> {icon} {text} </Link>
    )
}

const ProfileMenu = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/")

        toast.success("Has cerrado sesión")
    };

    return (
        <Menu>
            <MenuButton>
                <Box display="flex" gap="10px" alignItems="center"> <LuCircleUserRound />Cuenta</Box>
            </MenuButton>
            <MenuList color="#1a1a1a">
                <MenuItem>Ver Perfil</MenuItem>
                <MenuItem>Vaciar Carrito</MenuItem>
                <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
            </MenuList>
        </Menu>
    )
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLAnchorElement>(null);

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


            <HStack minHeight="40px" backgroundColor="#1a1a1a" marginBottom="2em" sx={{
                "&:hover": {
                    backgroundColor: "red"
                }
            }}>
                <HStack width="80%" margin="0 auto" padding="1em 0" color="#eee" justifyContent="space-between">
                    <HStack gap="1em">
                        <Image width="40px" src={logo} alt="logo tienda" />
                        <Text fontSize="2xl" >Mi tienda</Text>
                    </HStack>
                    <HStack gap="2em">
                        <NavLink icon={<RiHomeLine />} text="Inicio" />
                        <NavLink icon={<FaUsers />} text="Nosotros" />
                        <ProfileMenu />
                        <NavLink ref={btnRef} onClick={onOpen} icon={<LuShoppingCart />} text="" />
                    </HStack>
                </HStack>
            </HStack>
        </>
    )
};

export default Navbar;