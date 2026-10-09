import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DummyEndpoints, type DummyProduct } from "../shared/declarations/Dummyjson";
import useFetch from "@hooks/useFetch";
import { Box, Heading, Image } from "@chakra-ui/react";

const SingleProduct = () => {
    const {id}=  useParams();
    const [product, setProduct] = useState<DummyProduct>();

    const {get} = useFetch(`${DummyEndpoints.PRODUCTS}/${id}`);

    async function getProduct() {
        const producto = await get();

        setProduct(producto);
    }

    useEffect(() => {
        getProduct()
    }, [])

    console.log(id)

    return (
        <Box>
            <Image src={product?.thumbnail} height="300px" />
            <Heading size="2xl">{product?.title}</Heading>

            <Link to="/products">Volver a los productos</Link>
        </Box>
    )
};

export default SingleProduct;