import { useEffect, useState } from "react";
import useFetch from "../shared/hooks/useFetch";
import { DummyEndpoints, type DummyProduct, type DummyProducts } from "../shared/declarations/Dummyjson";
import Product from "../shared/components/Product";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import BaseLayout from "@layouts/BaseLayout";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import sale1 from "@images/sales/sale1.jpg";
import sale2 from "@images/sales/sale2.jpg";
import sale3 from "@images/sales/sale3.jpg";
import sale4 from "@images/sales/sale4.jpg";

import { tablesDB } from "../shared/lib/appwrite";
import { AppwritePrjct } from "../shared/lib/env";

const SwiperImages = [sale1, sale2, sale3, sale4];

const Products = () => {
    const [products, setProducts] = useState<Array<DummyProduct>>();
    const [appwriteProducts, setAppwriteProducts] = useState<Array<object>>()

    const { get } = useFetch(DummyEndpoints.PRODUCTS);

    const getProducts = async () => {
        const { products }: DummyProducts = await get();

        setProducts(products)
        console.log(products)
    }

    const getProductsFromAppwrite = async () => {
        const { rows } = await tablesDB.listRows({
            databaseId: AppwritePrjct.databaseId, 
            tableId: AppwritePrjct.tablesDBPrjct.products})

        setAppwriteProducts(rows)
        
        console.log(rows, "appwriteProducts")
    }

    useEffect(() => {
        getProducts()
        getProductsFromAppwrite()
    }, [])


    return (
        <BaseLayout>
            <>
                <Box width="1000px" margin="0 auto" >
                    <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]}>
                        {
                            SwiperImages.map(image => (
                                <SwiperSlide key={image} >
                                    <Image padding="4em" src={image} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Box>

                <Box width="80%" margin="2em auto">
                    <Heading size="lg">Mis productos</Heading>
                    <hr />
                {/* name esta subrayado en rojo porque no esta tipado  */}
                    {
                        appwriteProducts?.map(product => (
                            <Box key={product.name} >
                                <Text> {product.name} </Text>
                            </Box>
                        ))
                    }
                </Box>

                <Box display="flex" flexWrap="wrap" width="80%" margin="0 auto" justifyContent="space-between" gap="3em">
                    {
                        products && products.map(p => (
                            <Product key={p.id} product={p} />
                        ))
                    }
                </Box>
            </>

        </BaseLayout>
    )
};

export default Products;