import { useState, ChangeEvent, FormEvent } from 'react'
// tenporarly import, data will come from database
import options from '../../Model/optons';

const AddNewProduct = () => {
  const [name, setName] = useState<string>('');
  const [path, setPath] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCatgeory] = useState<string>('');
  const [stock, setStock] = useState<number | ''>('');
  const [hasErrors, sethasError] = useState<boolean>( false);

  const handleStock = (e: ChangeEvent<HTMLInputElement>) => { 
    const stock = e.target.value
    if(!parseInt(stock)) return; // what is returned at this point ??
    setStock(+stock);
  }

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isformFilled = [name, path, price, stock].every(item => item !== '')
    if (!isformFilled) {
      sethasError(true);
      return ;
    };
    
    console.log(name)
    console.log(path)
    console.log(price)
    console.log(category)
    console.log(stock)

  }

  return (
    <section className="add-product flex-col">
      <div>AddNewProduct</div>
      <form className="flex-col" method="POST" onSubmit={handleFormSubmission}>
          <label htmlFor="product-name">
            <span>Product Name</span>
            <input id="product-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </label>

          <label htmlFor="product-image">
            <span>Product Image</span>
            <input type="file" id="product-image"
              value={path}
              onChange={ (e) => setPath(e.target.value) }
              required />
          </label>

          <label htmlFor="product-price">
            <span>Price</span>
            <input id="product-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required />
          </label>

          <label htmlFor="product-category">
            <span>Catgeory</span>
            <select onChange={(e) => setCatgeory(e.target.value)}>
              <option value="">Select category</option>
              {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </select>
          </label>

          <label htmlFor="stock">
            <span>Quantity available</span>
            <input 
              type="number"
              value={stock}
              onChange = {handleStock}
              required /> 
          </label>
          <button type="submit">Add</button>
          <p>{ hasErrors ? "Please fill in all fields" : null }</p>
      </form>
    </section>
  )
}

export default AddNewProduct