
const URL = 'http:127.0.0.1:3000/products'

// update a product
export const updateProduct = async (product) => {
    const response =  await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product)
    });
    if(!response.ok) throw Error("Could not update");
    const product =  await response.json()
    return product;
};

