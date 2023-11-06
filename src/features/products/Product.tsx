import { selectProducts } from "./productSlice"
import { useAppSelector } from "../../app/hooks"
import { ReactNode } from "react";

const Product = () => {
  const status = useAppSelector(state => state.products.status);
  const products =  useAppSelector(state => selectProducts(state));
  let content: ReactNode = '';

  // refactor this into another component
  if(status === "succeeded") {
    content = products.map((product) => (
      <article className="product-panel" key={product._id} >
        <div className="item-image">
          <img src={product.image} alt={product.name} />
        </div>
        <h3>{product.name}</h3>
        <h4>{product.price.toString()}</h4>
        <h4>{product.category}</h4>
        <h4>Quantity available: {product.stock.toString()}</h4>
      </article>
    ))
  }


  return (
    <section className="product-list">
      { content }
    </section>
  )
}

export default Product