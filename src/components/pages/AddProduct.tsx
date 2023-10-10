import { ChangeEvent, useState } from "react";

const AddProduct = () => {
    const [imagePath, setImagePath] = useState<string>('');

    // These categories should be loaded from redux
    const categories = ['Kitchen ware', 'games', 'electronics'];

    const handleImagePath = (e: ChangeEvent<HTMLSelectElement>) => {
        setImagePath(e.target.value)
    }

    const selectOptions = categories.map((category) => <option value={category}>{category}</option>)
    
    return (
        <div className="add-product">
            <form>
                <div className="image-preview">
                    <img src={imagePath} alt="product" />
                </div>                
                <div className="form-fields">
                    {/* <div className="control-wrapper"> */}
                        <h1>Add Product</h1>
                        <input type="text"  name="name" required maxLength={20} placeholder="Produc name"/>
                        <input type="file" name="image" required accept="image/png, image/jpg, image/gif, image/jpeg"/>
                        <input type="text" name="price" required placeholder="Price"/>
                        <input type="text" name="stock" placeholder="Quantity available" />
                        <div>
                            <label htmlFor="category">Product category</label>
                            <select name="choice" onChange={(e) => handleImagePath(e)}>
                                <option value=""> Select category</option>
                                {categories.length? selectOptions : <option value="">No categories available</option>}
                            </select>
                        </div>
                        <button type="submit">Save</button>
                    {/* </div> */}
                </div>
            </form>
        </div>
    );

};

export default AddProduct;
