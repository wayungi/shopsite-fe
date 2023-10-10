import ProductModel from "../../Model/Product"; 
import ProductPanel from "./ProductPanel";

type ProductDisplayProps =  {
    productList: ProductModel[]
}

const ProductDisplay = ({ productList }:ProductDisplayProps) =>  {

    let productDsiplayList  = null
    if(productList.length > 0){
        productDsiplayList = productList.map((product) => ProductPanel(product))
    }

    return (
        <section className="product-display">
           {productDsiplayList? productDsiplayList: "No products avaialable"}
        </section>
    );
};

export default ProductDisplay;
