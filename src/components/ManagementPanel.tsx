import { useState, useEffect, ChangeEvent } from 'react';

type DatabaseProduct = {
    serverImagePath: string,
    _id: string,
    name: string,
    price:  number,
    category: string,
    stock: number,
    __v: number
  }

const ManagementPanel = ({_id, serverImagePath, name, price, category, stock}: DatabaseProduct) => {

  const [nameEdit, setName] =  useState(name);
  const [priceEdit, setPrice] = useState(price);
  const [categoryEdit, setCategory] =  useState(category)
  const [stockEdit, setStock] = useState(stock);

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
    <article key={_id} className="management-panel">
        <div className="management-image">
            <img src={serverImagePath} alt={name} />
        </div>

        <div className="management-data">
            <label htmlFor="name">Name</label>
            <input type="text" value={nameEdit} id="name" onChange={(event) => setName(event.target.value)}/>
            <label htmlFor="price">Price</label>
            <input type="text" value={priceEdit.toString()} id="price" onChange={handlePriceChange}/>
            <label htmlFor="category">category</label>
            <input type="text" value={categoryEdit} id="category" onChange={(event) => setCategory(event.target.value)}/>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" value={stockEdit.toString()} id="quantity" onChange={handleStockChange}/>
        </div>

        <div>
            <button>Edit</button>
            <button>Save</button>
        </div>
    </article>
  );
}

export default ManagementPanel;
