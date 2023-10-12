import {useState} from 'react';
import Product from "../../Model/Product";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
import { useAppDispatch } from '../../app/hooks';
import { deleteProduct } from "../../features/products/productSlice";
import EditProduct from "./EditProduct";

type ProductPanelProps =  {product: Product}

const ProductPanel = ( { product } : ProductPanelProps ) => {
    const {id, name, image, price, category, stock} = product;
    const [isEditable, setIsEditable] = useState<Boolean>(false);
    const dispatch = useAppDispatch();
    const handleDeleteProduct = () => dispatch(deleteProduct(id));
    const handleEdit = () => setIsEditable(true);
    
    return (
        <article className="product-panel">
            <div><img src={image}  alt={name} /></div>
            <p className="product-name">{name}</p>
            <p className="product-price">Shs {price.toString() /*Number is not a valid ReactNode element so must be connverted to string*/}</p>
            <p className="product-category">category - {category}</p>
            <p className="product-stock">Quantity avaialable - {stock.toString() /*Number is not a valid ReactNode element so must be connverted to string */}</p> 
            <button id="add-cart">Add to cart</button>
            <div className="admin-controls">
                <AiOutlineEdit size="2em" className="edit" title="edit" onClick={() => handleEdit()}/>
                <MdOutlineDeleteOutline size="2em" className="delete" title="delete" onClick={() => handleDeleteProduct() }/>
            </div>

            {isEditable && <div key={id}>{<EditProduct product={product} setIsEditable={setIsEditable}/>}</div>}
        </ article>
    );
};

export default ProductPanel