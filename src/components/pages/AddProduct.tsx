import { /*ChangeEvent*/ Dispatch,SetStateAction,useState } from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from "../../features/products/productSlice";

type AddProductProps = {
    setShowAddProductForm: Dispatch<SetStateAction<Boolean>>
};

const AddProduct = ({setShowAddProductForm}: AddProductProps) => {
    const dispatch = useAppDispatch();

    const[name, setName] = useState<string>('');
    const[image, setImage] = useState<string>('');
    const[price, setPrice] = useState<Number>(0.00);
    const[category, setCategory] = useState<string>('Select Category');
    const[stock, setStock] = useState<Number>(0.00);

    // These categories should be loaded from redux
    const categories = ['Kitchen ware', 'games', 'electronics'];
    const selectOptions = categories.map((category, index) => <option key={index} value={category}>{category}</option>);

    const closeModal = () => {
        setShowAddProductForm(false);
    }

    const saveProduct = () => {
        const newProduct =  {
            id: '',
            name,
            image,
            price,
            category,
            stock
        };

        dispatch(addProduct(newProduct))
        closeModal();
    }

    const validateNumber = (value: string): Number => {
        const result = +value || 0;
        return result;
    }
    
    return (
        <div className="add-product">
            <form>  
                <div className="header">
                    <h1>Add Product</h1>
                    <AiFillCloseCircle size="2em" onClick={closeModal}/>
                </div> 
                <label htmlFor="name">Product Name        
                    <input 
                        id="name"
                        type="text"
                        value={name} 
                        name="name" 
                        required 
                        maxLength={20} 
                        placeholder="Produc name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label> 
                <label htmlFor="image">Upload Image
                    <input 
                        type="file"
                        name="image"
                        required accept="image/png, image/jpg, image/gif, image/jpeg"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label htmlFor="price">Price
                    <input 
                        type="text"
                        name="price"
                        required 
                        placeholder="Price"
                        value={price.toString()}
                        onChange={(e) => setPrice(validateNumber(e.target.value))}
                    />
                </label>
                <label htmlFor="quantity">Quantity
                    <input 
                        type="text"
                        name="stock"
                        placeholder="Quantity available" 
                        value={stock.toString()}
                        onChange={(e) => setStock(validateNumber(e.target.value))}
                    />
                </label>
                <label htmlFor="category">Product category
                    <select name="choice" onChange={(e) => setCategory(e.target.value)}>
                        <option value={category}>{category}</option>
                        {categories.length? selectOptions : <option value={category}>No categories available</option>}
                    </select>
                </label>
                <button type="submit" onClick={saveProduct}>Save</button>
            </form>
        </div>
    );
};

export default AddProduct;
