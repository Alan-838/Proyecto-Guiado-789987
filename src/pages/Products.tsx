import { useEffect ,useState } from "react";
import useFetch from "../shared/hooks/useFetch";
import { DummyEndpoints, type DummyProduct, type DummyProducts } from "../shared/declarations/Dummyjson";
import Product from "../shared/components/Product";


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
        <div>
            {
                products && products.map(p => (
                    <Product key={p.id} product={p} />
                ))
            }
        </div>
    )
};

export default Products;