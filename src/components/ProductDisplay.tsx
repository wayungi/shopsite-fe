import { Product } from "../Model/Product";

const ProductDisplay = ({_id, imageUrl, name, price, category, stock}: Product) => {
    const productDisplay = (
        <article className="product-panel" key={_id} >
            <div className="item-image">
            <img src={imageUrl} alt={name} />
            </div>
            <h3 className="item-desc">{name}</h3>
            <h4 className="item-desc"> UGX: {price.toString()}</h4>
            <h4 className="item-desc">{category}</h4>
            <h4 className="item-desc">Quantity available: {stock.toString()}</h4>
            <button className="add-to-cart">Add to Cart</button>
        </article>
    );

    return productDisplay;
};

export default ProductDisplay;
