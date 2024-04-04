import React, { useContext } from 'react';
import './Cart.css';
import { StorContext } from '../../Context/StorContext';

export default function Cart() {

  const { cartItems, food_list, removeFromCart } = useContext(StorContext);
  console.log("aaaaaaaaaa", cartItems);
  return (
    <div className='cart'>
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
        <p>{item}</p>
        if(cartItems[item._id]>0)
        {
          return(
            <div className='cart-items-title'>
              <p>{item.name}</p>
            </div>
          )
        }
      })}
    </div>
  )
}
