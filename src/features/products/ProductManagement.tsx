import { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from "./productSlice";
import ManagementPanel from "../../components/ManagementPanel";

const ProductManagement = () => {
  const products =  useAppSelector(selectProducts);
  let content: (ReactNode[] | null) = null;

  if(products.length > 0) {
    content = products.map((product) => <ManagementPanel key={product._id}
      _id={product._id}
      serverImagePath={product.serverImagePath}
      name={product.name}
      price={product.price}
      category={product.category}
      stock={product.stock}
    />);
  }  

  return (
    <section className="product-management">{content}</section>
  );

}

export default ProductManagement;
