import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { type DummyProduct } from "../declarations/Dummyjson";
import { Link } from "react-router-dom";

const Product = ({ product }: { product: DummyProduct }) => {
    return (
        <Box width="300px" backgroundColor="#eee" borderRadius="20px" padding="1.5em" display="flex" justifyContent="space-between" flexDirection="column" gap="0.5em" >
            <Image src={product.thumbnail} alt={product.description} loading="lazy" />
            <Heading size="md">
                <Link to={`/products/${product.id}`} > {product.title} </Link>
            </Heading>
            <Text>$ {product.price}</Text>
            <Button>Agregar al carrito</Button>
        </Box>
    )
};

export default Product;