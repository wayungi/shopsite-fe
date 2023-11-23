import { useState } from 'react';
import { CartItem } from "../Model/Product";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAdd, MdRemove} from "react-icons/md";


const Order = ({ id, name, src, unitPrice, quantity }: CartItem) => {

    const [itemCount, setItemCount] = useState(quantity);

    // console.log(items)
    // console.log(status);
    // console.log(date)

    const handleReduceQunatity = () => {
        setItemCount(itemCount - 1)
    }
    const handleAddQuantity = () => {
        setItemCount(itemCount + 1)
    }

    const item  = (
            <div className="item-display" key={id}>
                <div className="item-desc">
                    <div className="cart-image">
                        <img src={src} />
                    </div>
                    <div className="item-name-price">
                        <p>{name}</p>
                        <p>{unitPrice}</p>
                        {/* <p>{item.unitPrice * item.quantity}</p> */}
                    </div>
                </div>
                <div className="item-controls">
                    <div className="delete-item">
                        <AiOutlineDelete size="2em"/>
                        <p>Remove</p>
                    </div>
                    <div className="add-remove">
                        <MdRemove size="2em" onClick={ handleReduceQunatity } className="quantity-btn"/>
                            <p>{itemCount}</p>
                        <MdAdd size="2em" onClick={ handleAddQuantity } className="quantity-btn"/>
                    </div>
                </div>
                
            </div>
        );

    return (
        <article className="item-list">
            {item}
        </article>
    )

};

export default Order;