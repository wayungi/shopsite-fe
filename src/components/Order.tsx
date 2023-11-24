import { useState, useEffect } from 'react';
import { CartItem } from "../Model/Product";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAdd, MdRemove} from "react-icons/md";
import { removeFromCart, changeQunatity } from '../features/products/productSlice';
import { useAppDispatch } from '../app/hooks';

// interface OrderProps {
//     id: string,
//     name: string,
//     src: string,
//     unitPrice: number,
//     quantity: number,
// }

const Order = ({ id, name, src, unitPrice, quantity }: CartItem) => {
    const dispatch =  useAppDispatch()
    const [itemCount, setItemCount] = useState(quantity);

    const handleReduceQunatity = () => {
        setItemCount((itemCount) => itemCount - 1)
    }

    const handleAddQuantity = () => {
        setItemCount((itemCount) => itemCount + 1)
    }

    useEffect(() => {
        dispatch(changeQunatity({id, itemCount}))
    }, [itemCount])

    const handleRemoveItem = () => {
        dispatch(removeFromCart(id));
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
                    <div className="delete-item" onClick={handleRemoveItem}>
                        <AiOutlineDelete size="2em" className="delete-item-button"/>
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