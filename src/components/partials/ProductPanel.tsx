import Product from "../../Model/Product";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';

export function ProductPanel({ id, name, image, price, category, stock }: Product): React.ReactElement {

    return (
        <article key={id} className="product-panel">
           <div>
            <img src={image}  alt={name} />
           </div>
           <p className="product-name">{name}</p>
           <p className="product-price">Shs {price.toString() /*Number is not a valid ReactNode element so must be connverted to string*/}</p>
           <p className="product-category">category - {category}</p>
           <p className="product-stock">Quantity avaialable - {stock.toString() /*Number is not a valid ReactNode element so must be connverted to string */}</p> 
           <button id="add-cart">Add to cart</button>
           <div className="admin-controls">
            <AiOutlineEdit size="2em" className="edit" title="edit"/>
            <MdOutlineDeleteOutline size="2em" className="delete" title="delete"/>
           </div>
        </ article>
    );
};

export default ProductPanel