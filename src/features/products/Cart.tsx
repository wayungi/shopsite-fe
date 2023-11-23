import { selectCartHistory } from "./productSlice";
import { useAppSelector } from "../../app/hooks";
import Order from "../../components/Order";
import { CartItem } from "../../Model/Product";

const Cart = () => {
  const cartHistory: CartItem[] =  useAppSelector((state) => selectCartHistory(state));
  const content = cartHistory.map((cart, index) => <Order key={index} id={cart.id} name={cart.name} src={cart.src} unitPrice={cart.unitPrice} quantity={cart.quantity} />)

  return (
    <section className="cart">
      {content}
    </section>
  );
}

export default Cart;