export type Product = {
    "_id": string, 
    "name": string,
    "imageUrl": string,
    "price": number,
    "category": string,
    "stock": number,
    "__v": number
};

export type CartItem = {
    id: string,
    name: string,
    src: string,
    unitPrice: number,
    quantity: number,
}

