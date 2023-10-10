import ProductModel from "../../Model/Product"; 
import ProductPanel from "./ProductPanel";
import NoProducts from "./NoProducts";


type ProductDisplayProps =  {
    productList: ProductModel[]
}

const ProductDisplay = ({ productList }:ProductDisplayProps) =>  {

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
