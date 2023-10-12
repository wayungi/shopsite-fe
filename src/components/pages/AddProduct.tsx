import { /*ChangeEvent*/ Dispatch,SetStateAction } from "react";
import {AiOutlineSave, AiFillCloseCircle} from 'react-icons/ai';
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
                <div>
                    <h1>Add Product</h1>
                    <AiFillCloseCircle size="2em" onClick={closeModal}/>
                </div>             
                <input type="text"  name="name" required maxLength={20} placeholder="Produc name"/>
                <input type="file" name="image" required accept="image/png, image/jpg, image/gif, image/jpeg"/>
                <input type="text" name="price" required placeholder="Price"/>
                <input type="text" name="stock" placeholder="Quantity available" />
                <label htmlFor="category">Product category
                    <select name="choice">
                        <option value=""> Select category</option>
                        {categories.length? selectOptions : <option value="">No categories available</option>}
                    </select>
                </label>
                <AiOutlineSave size="2em" onClick={saveProduct}/>
            </form>
        </div>
    );
};

export default AddProduct;
