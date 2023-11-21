import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { updateProduct, deleteProduct } from '../features/products/productSlice';

interface props {
  _id: string,
  serverImagePath: string,
  name: string,
  price: number,
  category: string,
  stock: number,
}

const ManagementPanel = ({_id, serverImagePath, name, price, category, stock}: props) => {

  const dispatch =  useAppDispatch();

  const [nameEdit, setName] =  useState(name);
  const [priceEdit, setPrice] = useState(price.toString());
  const [categoryEdit, setCategory] =  useState(category)
  const [stockEdit, setStock] = useState(stock.toString());
  const [readOnly, setReadOnly] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if(!readOnly){
      setIsUpdated(true);
      console.log("readonly is true")
    }
  }, [nameEdit, priceEdit, categoryEdit, stockEdit, isUpdated])

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    if(!newPrice) setPrice(priceEdit);
    setPrice(event.target.value);
  }

  const handleStockChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newStockCount = parseInt(event.target.value);
    if(!newStockCount) setStock(stockEdit);
    setStock(newStockCount + stockEdit);
  }

  const handleSave = () => {
    if(!isUpdated) return;
    setIsUpdated(false);
    const areValuesSet = [nameEdit, priceEdit, stockEdit].every((field) => field !== '');
    if(!areValuesSet) return;
    setReadOnly(true);
    const productEdits = { 
      _id,
      name: nameEdit,
      serverImagePath,
      price: priceEdit,
      category: categoryEdit,
      stock: stockEdit
    };
    dispatch(updateProduct(productEdits));
  }

  const handleDelete = () => {
    const productId = { 
      _id,
    };
    dispatch(deleteProduct(productId));
  }
       
  return (
    <article className="management-panel">
        <div className="management-image">
            <img src={serverImagePath} alt={name} />
        </div>

        <div className="management-data">
            <label htmlFor="name">Name</label>
            <input type="text" value={nameEdit} id="name" readOnly={readOnly} onChange={(event) => setName(event.target.value)}/>
            <label htmlFor="price">Price</label>
            <input type="text" value={priceEdit.toString()} id="price" readOnly={readOnly} onChange={handlePriceChange}/>
            <label htmlFor="category">category</label>
            <input type="text" value={categoryEdit} id="category" readOnly={readOnly} onChange={(event) => setCategory(event.target.value)}/>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" value={stockEdit.toString()} id="quantity" readOnly={readOnly} onChange={handleStockChange}/>
        </div>

        <div className="management-controls">
            <button onClick={() => setReadOnly(false)}>Edit</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </article>
  );
}

export default ManagementPanel;
