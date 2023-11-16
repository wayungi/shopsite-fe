import { useState, ChangeEvent } from 'react';

interface props {
  serverImagePath: string,
  name: string,
  price: number,
  category: string,
  stock: number,
  // onClick: () => void,
}

const ManagementPanel = ({serverImagePath, name, price, category, stock}: props) => {

  const [nameEdit, setName] =  useState(name);
  const [priceEdit, setPrice] = useState(price);
  const [categoryEdit, setCategory] =  useState(category)
  const [stockEdit, setStock] = useState(stock);
  const [readOnly, setReadOnly] = useState(true);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(event.target.value);
    if(!newPrice) setPrice(priceEdit);
    setPrice(newPrice);
  }

  const handleStockChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newStockCount = parseInt(event.target.value);
    if(!newStockCount) setStock(stockEdit);
    setStock(newStockCount + stockEdit);
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
            <button>Save</button>
            <button>Delete</button>
        </div>
    </article>
  );
}

export default ManagementPanel;
