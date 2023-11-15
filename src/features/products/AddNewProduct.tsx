import { useState, FormEvent, ReactNode, ChangeEvent } from 'react';
import { postProduct } from './productSlice';
import { useAppDispatch } from '../../app/hooks';
import axios from 'axios';

// temporarly import, data will come from database
import options from '../../Model/optons';

const AddNewProduct = () => {

  const PRESET_KEY="jwkui3nn";
  const CLOUD_NAME = "ddwvtbyfm";
  const URL =  `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const dispatch =  useAppDispatch();
  const [name, setName] = useState<string>('');
  const [localImagePath, setLocalImagePath] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCatgeory] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [hasErrors, setHasError] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>();
  const [serverImagePath, setServerImagePath] = useState<string>('');
  const errors: string[] = [];
  let errorMessages: (ReactNode | null) = null;

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalImagePath(event.target.value);
    setFile(event.target.files?.[0]);
  }

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false) // reset to false just incase it was set to true on the first run
    const isformFilled = [name, file, localImagePath].every(item => item !== '')
    const isValidNumber = [price, stock].every(item => Number(item));

    if (!isformFilled || !isValidNumber) {
      if(!isformFilled) errors.push("Name & image fields must be filled");
      if (!isValidNumber) errors.push("Price and Stock must be number fields");
      setHasError(true);
      return;
    };

    //upload the image to cloudinary and return the image path
    if(file !== undefined) {
      const formData =  new FormData();
      formData.append('file', file);
      formData.append('upload_preset', PRESET_KEY);
      axios.post(URL, formData)
      .then(res => {
        setServerImagePath(res.data.secure_url);
        console.log(res.data.secure_url)
        dispatch(postProduct({name, serverImagePath, price, category, stock}))
      })
      .catch(err => console.log(err.request));
    }
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
              value={localImagePath}
              onChange={handleImageUpload }
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