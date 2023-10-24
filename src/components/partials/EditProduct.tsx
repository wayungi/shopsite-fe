import { ChangeEvent, useState,SetStateAction } from 'react';
import { useAppSelector, useAppDispatch  } from '../../app/hooks';
import {AiOutlineSave, AiFillCloseCircle} from 'react-icons/ai';
import Product from '../../Model/Product';
import { editProduct } from '../../features/products/productSlice';
import { updateProduct} from '../../api/products';

type editProductProps =  { 
    product: Product, 
    setIsEditable: React.Dispatch<SetStateAction<Boolean>>
}

const EditProduct = ({product, setIsEditable}: editProductProps) => {
    const dispatch = useAppDispatch();

    const {id, name, image, price, category, stock } = product;
    const categories = useAppSelector((state) => state.products.categories);

    const [editedName, setEditedName] = useState<string| ''>(name);
    // const [editedImage, setEditedImage] = useState<string| ''>(image);
    const [editedPrice, setEditedPrice] = useState<Number| 0>(price);
    // const [editedCategory, setEditedCategory] = useState<string| ''>(category);
    const [editedStock, setEditedStock] = useState<Number| ''>(stock);

    const handleCloseModal = () => setIsEditable(false);

    const handleSaveEdits = async () => {
        const editedProduct = {
            "id": id,
            "name": editedName,
            "image": image, //editedImage,
            "price": +editedPrice,
            "category": category, // editedCategory,
            "stock": +editedStock
        }

        // console.log(editProduct); 

        const result =  await updateProduct(editedProduct);
        if(!result) return "Product update failed"
        //if product is update on the server, update the product on the client
        dispatch(editProduct(result));
        setIsEditable(false);
    }
    

    // handle form field updates
    const handleProductNameUpdate = (event: ChangeEvent<HTMLInputElement>) => setEditedName(event.target.value);
    // const handleImageUpdate = (event: ChangeEvent<HTMLInputElement>) => setEditedImage(event.target.value);
    const handlePriceUpdate = (event: ChangeEvent<HTMLInputElement>) => setEditedPrice(+event.target.value);
    // const handleCategoryUpdate = (event: ChangeEvent<HTMLSelectElement>) => setEditedCategory(event.target.value);
    const handleStockUpdate = (event: ChangeEvent<HTMLInputElement>) => setEditedStock(+event.target.value);

    return (
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
                    <input type="text" value={editedName} name="name" id="name" onChange={(e) => handleProductNameUpdate(e)}/>
                </label>

                <div>
                    <img  src={image} alt={name} />
                </div>

                <label htmlFor="price">Price
                    <input type="text" value={editedPrice.toString()}  id="price" onChange={(e) => handlePriceUpdate(e)}/>
                </label>

                <label htmlFor="catgeory">Category
                    <select name="selectName">
                        <option value={category}>{category}</option>
                        {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                </label>

                <label htmlFor="stock">Quantity in stock
                    <input type="text" value={editedStock.toString()} onChange={(e) => handleStockUpdate(e)} />
                </label>

                <AiOutlineSave size="2em" onClick={() => handleSaveEdits()}/>

            </div> 
        </div>
    );
};

export default EditProduct;
