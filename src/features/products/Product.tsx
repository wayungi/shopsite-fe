import { selectProducts } from "./productSlice"
import { useAppSelector } from "../../app/hooks"
import { ReactNode } from "react";

const Product = () => {

  const status = useAppSelector(state => state.products.status);
  const products =  useAppSelector(state => selectProducts(state));
  let content: ReactNode = '';

  /*
    _id: "653b47b30fc31abc8f54d08b",
    name: "pawn",
    image: "https://picsum.photos/id/237/200/300",
    price: 5500,
    category: "games",
    stock: 20,
    __v: 0 }
  */ 

  if(status === "succeeded") {
    content = products.map((product) => {
      return (
        <article key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <h4>{product.price.toString()}</h4>
          <h4>Quantity available: {product.stock.toString()}</h4>
        </article>
      )
    })


  }

  return (
    <section className="product-list">
      { content }
    </section>
  )
}

export default Product