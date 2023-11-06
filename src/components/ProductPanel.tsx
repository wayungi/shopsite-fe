type Props = {
  id: string,
  name: string,
  image: string,
  price: Number,
  category: string,
  stock: Number
}



const ProductPanel = ({id, name, image, price, category, stock}: Props) => {
  return (
    <article className="product-panel" key={id} >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{price.toString()}</h4>
      <h4>{category}</h4>
      <h4>Quantity available: {stock.toString()}</h4>
    </article>
  )
}

export default ProductPanel