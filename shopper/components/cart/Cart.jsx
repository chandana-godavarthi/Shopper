import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Cartcard from "../cart-card/Cartcard.jsx";
import all_product from "../assets/all_product.js";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";
import empty_cart from "../assets/emptycart1.png";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const proPrice = useSelector((state)=>state.cartslice.proPrice);
  const checkPrice  = useSelector((state)=>state.cartslice.checkPrice);
  const shipPrice = useSelector((state)=>state.cartslice.shipPrice);
  const item = useSelector((state) => state.cartslice.item);
  const count = useSelector((state)=>state.cartslice.count);
  console.log(item);
  
  return (
    <div className="cart-main">
      <div className="sub-cart">
        <div className="left-cart">
        <div className="left-cart-heading">
            <h1>Shopping cart</h1>
          </div>
          {(count>0)?(<>
          <div className="left-cart-body">
            {item.map((ele) => (
              <Cartcard
                id={ele.itemid}
                quantity={ele.quantity}
              />
            ))}
          </div></>):(<>
            <img className="empty_cart" src={empty_cart} alt="" />
          </>)}
          <div className="left-cart-foot">
            <button onClick={() => navigate("/")}>
              {<FaArrowLeftLong />} Back to shop
            </button>
          </div>
        </div>
        <div className="right-cart">
          <div className="right-cart-checkout">
            <div className="right-cart-heading">
              <h1>Summary</h1>
            </div>
            <div className="right-cart-body">
              <div className="body-first">
                <span>Products</span>
                <span>${proPrice}</span>
              </div>
              <div className="body-second">
                <span>Shipping</span>
                <span>${shipPrice}</span>
              </div>
            </div>
            <div className="final-check">
              <div className="finalPrice">
                <span>Total Amount</span>
                <span>${checkPrice}</span>
              </div>
              <button>GO TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Cart;
