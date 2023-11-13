import { useState, FormEvent, ReactNode } from 'react';
import { postProduct } from './productSlice';
import { useAppDispatch } from '../../app/hooks';

// tenporarly import, data will come from database
import options from '../../Model/optons';

const AddNewProduct = () => {

  const dispatch =  useAppDispatch();
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCatgeory] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [hasErrors, setHasError] = useState<boolean>(false);
  const errors: string[] = [];
  let errorMessages: (ReactNode | null) = null;

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false) // reset to false just incase it was set to true on the first run
    const isformFilled = [name, image].every(item => item !== '')
    const isValidNumber = [price, stock].every(item => Number(item));

    if (!isformFilled || !isValidNumber) {
      if(!isformFilled) errors.push("Name & image fields must be filled");
      if (!isValidNumber) errors.push("Price and Stock must be number fields");
      console.log(errors)
      setHasError(true);
      return;
    };
    
    dispatch(postProduct({name, image, price, category, stock}))
  }

  if(hasErrors){
    errorMessages = errors.map((err, index) => (<p key={index}>{err}</p>));
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
              value={image}
              onChange={ (e) => setImage(e.target.value) }
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
              onChange = {(e) => setStock(e.target.value)}
              required /> 
          </label>
          <button type="submit">Add</button>
          {/* error message is not displayed on screen */}
          { errorMessages }
      </form>
    </section>
  )
}

export default AddNewProduct