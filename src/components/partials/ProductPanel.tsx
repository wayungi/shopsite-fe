import Product from "../../Model/Product";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteProduct } from "../../features/products/productSlice";
import { useState } from 'react';
import {AiOutlineSave, AiFillCloseCircle} from 'react-icons/ai';


const ProductPanel = ({ id, name, image, price, category, stock }: Product) => {
    const dispatch = useAppDispatch();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const categories = useAppSelector((state) => state.products.categories);

    const handleDeleteProduct = () => {
        console.log('deleteing ptoduct')
        dispatch(deleteProduct(id));
    }

    const handleCloseModal = () => {
        setIsEditable(false);
    }
    
    return (
        <> {isEditable ? 
            <div className="overlay">
                <div className="edit-product">
                    <div className="modal-header">
                        <h1>Edit Product</h1>
                        <AiFillCloseCircle size="2em"/>
                    </div>
                    <label htmlFor="id">Product Id
                        <input type="text" value={id} contentEditable="false" id="id"/>
                    </label>
                    <label htmlFor="name">Product Name
                        <input type="text" value={name} name="name" id="name"/>
                    </label>
                    <div>
                        <img  src={image} alt={name} />
                    </div>
                    <label htmlFor="price">Price
                        <input type="text" value={price.toString()}  id="price"/>
                    </label>
                    <label htmlFor="catgeory">Category
                        <select>{categories.map((category) => <option value={category}>{category}</option>)}</select>
                    </label>
                    <label htmlFor="stock">Quantity in stock
                        <input type="text" value={stock.toString()} />
                    </label>
                    <AiOutlineSave size="2em" onClick={() => handleCloseModal()}/>
                </div>
            </div>

        : null }
            
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
                <MdOutlineDeleteOutline size="2em" className="delete" title="delete" onClick={() => handleDeleteProduct() }/>
            </div>
            </ article>
        </>
    );
};

export default ProductPanel