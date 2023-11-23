import { selectCartHistory } from "./productSlice";
import { useAppSelector } from "../../app/hooks";
import Order from "../../components/Order";
import { CartItems } from "../../Model/Product";

const Cart = () => {
  const cartHistory: CartItems[] =  useAppSelector((state) => selectCartHistory(state));
  const content = cartHistory.map((cart, index) => <Order key={index} items={cart.items} status={cart.status} date={cart.date}/>)

  return (
    <section className="cart">
      {content}
    </section>
  );
}

export default Cart;