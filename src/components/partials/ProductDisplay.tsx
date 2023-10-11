import ProductModel from "../../Model/Product"; 
import ProductPanel from "./ProductPanel";
import NoProducts from "./NoProducts";
import { useAppSelector } from '../../app/hooks';
// import { deleteProduct } from "../../features/products/productSlice";


// type ProductDisplayProps =  {
//     productList: ProductModel[]
// }

const ProductDisplay = (/*{ productList }:ProductDisplayProps*/) =>  {

    //fetch all the products from the redux store
    const products: ProductModel[] = useAppSelector((state) => state.products.products);

    let productDisplayList  = null
    if(products.length > 0){
        productDisplayList = products.map((product) => ProductPanel(product))
    }

    return (
        <section className="product-display">
           {productDisplayList? productDisplayList: <NoProducts />}
        </section>
    );
};

export default ProductDisplay;
