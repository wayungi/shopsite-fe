import { selectProducts } from "./productSlice"
import { useAppSelector } from "../../app/hooks"
import { ReactNode } from "react";
import { useOutletContext } from "react-router-dom";
import ProductDisplay from "../../components/ProductDisplay";


const Product = () => {
  const status = useAppSelector(state => state.products.status);
  const products =  useAppSelector(state => selectProducts(state));
  let content: (ReactNode | null) = null;
  const filterValue: string = useOutletContext();

  // refactor this into another component
  if(status === "succeeded") {
    const filteredProducts = products.filter((product) => product.name.includes(filterValue)|| product.category.includes(filterValue));
    content = filteredProducts.map((product) => <ProductDisplay 
      _id={product._id}
      imageUrl={product.imageUrl}
      name={product.name}
      price={product.price}
      category={product.category}
      stock={product.stock}
      __v={product.__v}
    />
    )
  }


  return (
    <section className="product-list">
      { content }
    </section>
  )
}

export default Product