import ProductModel from "../../Model/Product"; 
import ProductPanel from "./ProductPanel";
import NoProducts from "./NoProducts";
import { useAppSelector, useAppDispatch } from '../../app/hooks';


type ProductDisplayProps =  {
    productList: ProductModel[]
}

const ProductDisplay = ({ productList }:ProductDisplayProps) =>  {
    const products = useAppSelector((state) => state.products.products);

    console.log(products);

    let productDisplayList  = null
    if(productList.length > 0){
        productDisplayList = productList.map((product) => ProductPanel(product))
    }

    return (
        <section className="product-display">
           {productDisplayList? productDisplayList: <NoProducts />}
        </section>
    );
};

export default ProductDisplay;
