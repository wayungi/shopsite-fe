import { /*ChangeEvent*/ Dispatch,SetStateAction } from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useAppDispatch } from '../../app/hooks';

type AddProductProps = {
    setShowAddProductForm: Dispatch<SetStateAction<Boolean>>
};

const AddProduct = ({setShowAddProductForm}: AddProductProps) => {
    const dispatch = useAppDispatch();
    // These categories should be loaded from redux
    const categories = ['Kitchen ware', 'games', 'electronics'];
    const selectOptions = categories.map((category, index) => <option key={index} value={category}>{category}</option>);

    const closeModal = () => {
        setShowAddProductForm(false);
    }

    const saveProduct = () => {
        const newProduct =  {
            
        }
        closeModal();
    }
    
    return (
        <div className="add-product">
            <form>  
                <div className="header">
                    <h1>Add Product</h1>
                    <AiFillCloseCircle size="2em" onClick={closeModal}/>
                </div> 
                <label htmlFor="name">Product Name        
                    <input id="name" type="text"  name="name" required maxLength={20} placeholder="Produc name"/>
                </label> 
                <label htmlFor="image">Upload Image
                    <input type="file" name="image" required accept="image/png, image/jpg, image/gif, image/jpeg"/>
                </label>
                <label htmlFor="price">Price
                    <input type="text" name="price" required placeholder="Price"/>
                </label>
                <label htmlFor="quantity">Quantity
                    <input type="text" name="stock" placeholder="Quantity available" />
                </label>
                <label htmlFor="category">Product category
                    <select name="choice">
                        <option value=""> Select category</option>
                        {categories.length? selectOptions : <option value="">No categories available</option>}
                    </select>
                </label>
                <button type="submit" onClick={saveProduct}>Save</button>
            </form>
        </div>
    );
};

export default AddProduct;
