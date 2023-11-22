import { useState, FormEvent, ReactNode, ChangeEvent, useEffect } from 'react';
import { postProduct } from './productSlice';
import { useAppDispatch } from '../../app/hooks';
import axios from 'axios';


// temporarly import, data will come from database
import options from '../../Model/optons';

const AddNewProduct = () => {

  const PRESET_KEY="jwkui3nn";
  const CLOUD_NAME = "ddwvtbyfm";
  const API =  `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const dispatch =  useAppDispatch();
  const [name, setName] = useState<string>('');
  const [localImagePath, setLocalImagePath] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCatgeory] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [hasErrors, setHasError] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>();
  // const [serverImagePath, setServerImagePath] = useState<string>('');
  const errors: string[] = [];
  let errorMessages: (ReactNode | null) = null;
  const [preview, setPreview] = useState<Blob | MediaSource > (new File(["default"], "default.png"));

  useEffect(() => {
    if(file !== undefined){
      setPreview(file)
    }    
  }, [file]);



  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalImagePath(event.target.value); 
    setFile(event.target.files?.[0]);

    // console.log(localImagePath)
    // console.log(file)
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
      axios.post(API, formData)
      .then(res => {
        dispatch(postProduct(
          { name,
            imageUrl: res.data.secure_url, 
            price,
            category,
            stock
          }));
      })
      .catch(err => console.log(err.request));
    }
  }

  if(hasErrors){
    errorMessages = errors.map((err, index) => (<p key={index}>{err}</p>));
  }

  return (
    <section className="add-product flex-col">
      
      <div className="form-parts">
        <section className="image-preview">
          { file && <img src={URL.createObjectURL(preview)} /> || <p className="preview-text">Image preview</p>}
        </section>

        <form className="flex-col new-product-form" method="POST" onSubmit={handleFormSubmission}>
            <label htmlFor="product-name">Name</label>
            <input id="product-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="product-image">Upload picture</label>
            <input type="file" id="product-image"
              value={localImagePath}
              onChange={handleImageUpload }
              required 
            />

            <label htmlFor="product-price">Price</label>
            <input id="product-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required 
            />

            <label htmlFor="product-category">Select catgeory</label>
            <select onChange={(e) => setCatgeory(e.target.value)}>
              <option value="">Select category</option>
              {options.map((option, index) => <option value={option} key={index}>{option}</option>)}
            </select>

            <label htmlFor="stock">Quantity available</label>
            <input 
              value={stock}
              onChange = {(e) => setStock(e.target.value)}
              required
            /> 
           
            <button type="submit">Save</button>
            {/* error message is not displayed on screen */}
            { errorMessages }
        </form>
      </div>
    </section>
  )
}

export default AddNewProduct