
type ProductPanelProps = {
    "id": string, 
    "name": string,
    "image": string,
    "price": Number,
    "category": String,
    "stock": Number
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