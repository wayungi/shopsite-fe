import Product from "../../Model/Product";
import {MdOutlineDeleteOutline} from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteProduct } from "../../features/products/productSlice";
import { ChangeEvent, useState } from 'react';
import {AiOutlineSave, AiFillCloseCircle} from 'react-icons/ai';


const ProductPanel = ({ id, name, image, price, category, stock }: Product) => {
    const dispatch = useAppDispatch();
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const categories = useAppSelector((state) => state.products.categories);
    const [productName, setProductName] = useState<string>(name);
    const [productPrice, setProductPrice] = useState<Number>(price);
    const [stockQuantity, setStockQuantity] = useState<Number>(stock);

    const handleDeleteProduct = () => {
        console.log('deleteing ptoduct')
        dispatch(deleteProduct(id));
    }

    const handleOpenEdit = () => {
        setIsEditable(true);
    }

    const handleCloseModal = () => {
        setIsEditable(false);
    }
    
    const handleSaveEdits = () => {

    }

    // handle form field updates
    const handleProductNameUpdate = (event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value);
    const handlePriceUpdate = (event: ChangeEvent<HTMLInputElement>) => setProductPrice(+event.target.value);
    const handleStockUpdate = (event: ChangeEvent<HTMLInputElement>) => setStockQuantity(+event.target.value);

    

    return (
        <div key={id}> 
            {isEditable ? 
                <div className="overlay">
                    <div className="edit-product">
                        <div className="modal-header">
                            <h1>Edit Product</h1>
                            <AiFillCloseCircle size="2em" onClick={() => handleCloseModal()}/>
                        </div>
                        <label htmlFor="id">Product Id
                            <input type="text" value={id} contentEditable="false" id="id" readOnly/>
                        </label>
                        <label htmlFor="name">Product Name
                            <input type="text" value={productName} name="name" id="name" onChange={(e) => handleProductNameUpdate(e)}/>
                        </label>
                        <div>
                            <img  src={image} alt={name} />
                        </div>
                        <label htmlFor="price">Price
                            <input type="text" value={productPrice.toString()}  id="price" onChange={(e) => handlePriceUpdate(e)}/>
                        </label>
                        <label htmlFor="catgeory">Category
                            <select>{categories.map((category) => <option value={category}>{category}</option>)}</select>
                        </label>
                        <label htmlFor="stock">Quantity in stock
                            <input type="text" value={stockQuantity.toString()} onChange={(e) => handleStockUpdate(e)} />
                        </label>
                        <AiOutlineSave size="2em" onClick={() => handleSaveEdits()}/>
                    </div>
                </div>
            : null }
            
            <article className="product-panel">
            <div>
                <img src={image}  alt={name} />
            </div>
            <p className="product-name">{name}</p>
            <p className="product-price">Shs {price.toString() /*Number is not a valid ReactNode element so must be connverted to string*/}</p>
            <p className="product-category">category - {category}</p>
            <p className="product-stock">Quantity avaialable - {stock.toString() /*Number is not a valid ReactNode element so must be connverted to string */}</p> 
            <button id="add-cart">Add to cart</button>
            <div className="admin-controls">
                <AiOutlineEdit size="2em" className="edit" title="edit" onClick={() => handleOpenEdit()}/>
                <MdOutlineDeleteOutline size="2em" className="delete" title="delete" onClick={() => handleDeleteProduct() }/>
            </div>
            </ article>
        </div>
    );
};

export default ProductPanel