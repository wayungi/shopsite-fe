import Product from "../Model/Product";

const URL = 'http:127.0.0.1:3000/products'

// update a product
export const updateProduct = async (product: Product) => {
    const response =  await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    });
    if(!response.ok) throw new Error("Could not update");
    const result =  await response.json()
    return result; 
};

