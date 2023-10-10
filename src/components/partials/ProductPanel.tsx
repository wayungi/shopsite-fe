import { ReactNode } from "react";

type ProductPanelProps = {
    "id": string, 
    "name": string,
    "image": string,
    "price": ReactNode, // Type Number is not assignable to type ReactNode. price is a number but will change it to ReactNode
    "category": String,
    "stock": ReactNode // type Number is not assignable to ReactNode type
}

export function ProductPanel({ id, name, image, price, category, stock }: ProductPanelProps): React.ReactElement {

    return (
        <article id={id}>
           <div>
            <img src={image}  alt={name} />
           </div>
           <h4>{name}</h4>
           <p>{price}</p>
           <p>{category}</p>
           <p>{stock}</p>
        </ article>
    );
};

export default ProductPanel