import ProductModel from "../../Model/Product"; 
import ProductPanel from "./ProductPanel";
import NoProducts from "./NoProducts";
import { useAppSelector} from '../../app/hooks';


const ProductDisplay = () =>  {
    //fetch all the products from the redux store
    const products: ProductModel[] = useAppSelector((state) => state.products.products);
    let productDisplayList  = null
    if(products.length > 0){
        productDisplayList = products.map((product, index) => (<div key={index}>
            {
                <ProductPanel product = {product}/>
            }
        </div>))
    }

    return (
        <section className="product-display">
           {productDisplayList? productDisplayList: <NoProducts />}
        </section>
    );
};

export default ProductDisplay;
