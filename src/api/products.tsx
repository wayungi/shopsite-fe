import Product from "../../Product";
// import { useAppDispatch } from "../app/hooks";
// import { addProduct } from "../features/products/productSlice";

//Add new  product 


// export const AddNewProduct = async (URL = "", data = {}) => {
//     try {
//         const response = await fetch(URL, data);
//         if(!response.ok) throw new Error("Could not add product")
//         const result = await response.json(); // parses JSON response into native JavaScript objects
//         return result
//     }catch(err) {
//         console.log(err);
//     }
// }


// update a product
export const updateProduct = async (product: Product) => {
    const URL = 'http:127.0.0.1:3000/product'


    try {
        const response =  await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
    
        if(!response.ok) throw new Error("Could not add product");
        const result =  await response.json()
        return result; 
    }catch(err) {
        console.log(err);
    }
};

