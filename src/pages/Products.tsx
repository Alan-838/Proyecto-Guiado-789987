import { useEffect, useState } from "react";
import useFetch from "../shared/hooks/useFetch";
import { DummyEndpoints, type DummyProduct, type DummyProducts } from "../shared/declarations/Dummyjson";
import Product from "../shared/components/Product";
import { Box } from "@chakra-ui/react";
import BaseLayout from "@layouts/BaseLayout";


const Products = () => {
    const [products, setProducts] = useState<Array<DummyProduct>>();

    const { get } = useFetch(DummyEndpoints.PRODUCTS);

    const getProducts = async () => {
        const { products }: DummyProducts = await get();

        setProducts(products)
        console.log(products)
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <BaseLayout>
            <Box display="flex" flexWrap="wrap" width="80%" margin="0 auto" backgroundColor="red" justifyContent="space-between" gap="3em">
                {
                    products && products.map(p => (
                        <Product key={p.id} product={p} />
                    ))
                }
            </Box>
        </BaseLayout>
    )
};

export default Products;