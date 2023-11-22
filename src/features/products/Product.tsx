import { selectProducts } from "./productSlice"
import { useAppSelector } from "../../app/hooks"
import { ReactNode } from "react";
import { useOutletContext } from "react-router-dom";


const Product = () => {
  const status = useAppSelector(state => state.products.status);
  const products =  useAppSelector(state => selectProducts(state));
  let content: (ReactNode | null) = null;
  const filterValue: string = useOutletContext();

  // refactor this into another component
  if(status === "succeeded") {
    const filteredProducts = products.filter((product) => product.name.includes(filterValue)|| product.category.includes(filterValue));
    content = filteredProducts.map((product) => (
      // Refactor this artcile into a component
      <article className="product-panel" key={product._id} >
        <div className="item-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <h3 className="item-desc">{product.name}</h3>
        <h4 className="item-desc"> UGX: {product.price.toString()}</h4>
        <h4 className="item-desc">{product.category}</h4>
        <h4 className="item-desc">Quantity available: {product.stock.toString()}</h4>
        <button className="add-to-cart">Add to Cart</button>
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