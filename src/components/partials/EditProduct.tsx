// import { ChangeEvent, useState } from 'react';
// import { useAppSelector } from '../../app/hooks';
import {/*AiOutlineSave,*/ AiFillCloseCircle} from 'react-icons/ai';
import Product from '../../Model/Product';
import { SetStateAction } from 'react';

type editProductProps =  { 
    product: Product, 
    setIsEditable: React.Dispatch<SetStateAction<Boolean>>
}

const EditProduct = ({product, setIsEditable}: editProductProps) => {
    console.log(product)
    // const {id, name, image, price, category, stock} = product;
    // const categories = useAppSelector((state) => state.products.categories);
    // const [productName, setProductName] = useState<string>(name);
    // const [productPrice, setProductPrice] = useState<Number>(price);
    // const [stockQuantity, setStockQuantity] = useState<Number>(stock);

    const handleCloseModal = () => setIsEditable(false);
    // const handleSaveEdits = () => {}

    // // handle form field updates
    // const handleProductNameUpdate = (event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value);
    // const handlePriceUpdate = (event: ChangeEvent<HTMLInputElement>) => setProductPrice(+event.target.value);
    // const handleStockUpdate = (event: ChangeEvent<HTMLInputElement>) => setStockQuantity(+event.target.value);

    return (
        <div className="overlay">
          
            <div className="edit-product">
                <div className="modal-header">
                    <h1>Edit Product</h1>
                    <AiFillCloseCircle size="2em" onClick={() => handleCloseModal()}/>
                </div>

                {/* <label htmlFor="id">Product Id
                    <input type="text" value={id} contentEditable="false" id="id" readOnly/>
                </label> */}

                {/* <label htmlFor="name">Product Name
                    <input type="text" value={productName} name="name" id="name" onChange={(e) => handleProductNameUpdate(e)}/>
                </label> */}

                {/* <div>
                    <img  src={image} alt={name} />
                </div> */}

                {/* <label htmlFor="price">Price
                    <input type="text" value={productPrice.toString()}  id="price" onChange={(e) => handlePriceUpdate(e)}/>
                </label> */}

                {/* <label htmlFor="catgeory">Category
                    <select>
                        <option value={category}>{category}</option>
                        {categories.map((category) => <option value={category}>{category}</option>)}
                        </select>
                </label> */}

                {/* <label htmlFor="stock">Quantity in stock
                    <input type="text" value={stockQuantity.toString()} onChange={(e) => handleStockUpdate(e)} />
                </label> */}

                {/* <AiOutlineSave size="2em" onClick={() => handleSaveEdits()}/> */}

            </div> 
        </div>
    );
};

export default EditProduct;
