import Product from "../../Model/Product";

export function ProductPanel({ id, name, image, price, category, stock }: Product): React.ReactElement {

    return (
        <article id={id}>
           <div>
            <img src={image}  alt={name} />
           </div>
           <h4>{name}</h4>
           <p>{price.toString() /*Number is not a valid ReactNode element so must be connverted to string*/}</p>
           <p>{category}</p>
           <p>{stock.toString() /*Number is not a valid ReactNode element so must be connverted to string */}</p> 
        </ article>
    );
};

export default ProductPanel