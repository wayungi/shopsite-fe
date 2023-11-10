import {useState, ChangeEvent} from 'react'

// tenporarly import, data will come from database
import options from '../../Model/optons';

const AddNewProduct = () => {
  const [productName, setProductName] = useState<string>('');
  const [productImage, setProductImage] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');
  const [stock, setStock] = useState<number | ''>('');


  const handleProdctName = (e: ChangeEvent<HTMLInputElement>) => { 
    setProductName(e.target.value)
  }

  const handleProdctImage = (e: ChangeEvent<HTMLInputElement>) => { 
    setProductImage(e.target.value)
  }

  const handleProdctPrice = (e: ChangeEvent<HTMLInputElement>) => { 
    setProductPrice(e.target.value)
  }

  const handleStock = (e: ChangeEvent<HTMLInputElement>) => { 
    const stock = e.target.value
    if(!parseInt(stock)) return; // what is returned at this point ??
    setStock(+stock);
  }

  return (
    <section>
      <div>AddNewProduct</div>
      <form>
          <label htmlFor="product-name">
            <span>Product Name</span>
            <input id="product-name"
              value={productName}
              onChange={handleProdctName}
            />
          </label>

          <label htmlFor="product-image">
            <span>Product Image</span>
            <input type="file" id="product-image"
              value={productImage}
              onChange={handleProdctImage}
            />
          </label>

          <label htmlFor="product-price">
            <span>Price</span>
            <input id="product-price"
              value={productPrice}
              onChange={handleProdctPrice}
            />
          </label>

          <label htmlFor="product-category">
            <span>Catgeory</span>
            <select>
              <option value="">Select category</option>
              {options.map((option) => <option value={option}>{option}</option>)}
            </select>
          </label>

          <label htmlFor="stock">
            <span>Quantity available</span>
            <input 
              type="number"
              value={stock}
              onChange = {handleStock}
            /> 
          </label>
          <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddNewProduct