import { Product } from "../Model/Product";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../features/products/productSlice";

const ProductDisplay = ({_id, imageUrl, name, price, category, stock}: Product) => {

    const dispatch = useAppDispatch();

    const  handleAddToCart = () => {
        const cartItem = {
            id: _id,
            name,
            src: imageUrl,
            unitPrice: price,
            quantity: 1,
        }
       dispatch(addToCart(cartItem));
    };

    const productDisplay = (
        <article className="product-panel" key={_id} >
            <div className="item-image">
            <img src={imageUrl} alt={name} />
            </div>
            <h3 className="item-desc">{name}</h3>
            <h4 className="item-desc"> UGX: {price.toString()}</h4>
            <h4 className="item-desc">{category}</h4>
            <h4 className="item-desc">Quantity available: {stock.toString()}</h4>
            <button className="add-to-cart" onClick={ handleAddToCart }>Add to Cart</button>
        </article>
    );

    return productDisplay;
};

export default ProductDisplay;
