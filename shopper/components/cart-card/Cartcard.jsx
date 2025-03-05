import React from "react";
import "./Cartcard.css";
import { removeProduct } from "../../redux/cartSlice.js";
// import p1_img from "../assets/product_1.png";
import { increaseQuantity,decreaseQuantity } from "../../redux/cartSlice.js";
import all_product from "../assets/all_product.js";


const Cartcard = (props) => {
  const dispatch = useDispatch();
  const element = all_product.find((ele)=>ele.id===props.id);
  return (
    <div className="cart-card-main">
      <img src={element.image} alt="" />
      <div className="pro_desc">
        <h6>{element.name}</h6>
      </div>
      <div className="pro_qua">
        <button onClick={()=>dispatch(decreaseQuantity(props))} class="vista-button">
          <div>-</div>
        </button>
        <p>{props.quantity}</p>
        <button onClick={()=>dispatch(increaseQuantity(props))} class="vista-button">
          <div>+</div>
        </button>
      </div>
      <div className="price">
        <h4>${element.new_price}</h4>
      </div>
      <div  className="remove-pro">
        {/* <!-- From Uiverse.io by vinodjangid07 -->  */}
        <button onClick={()=>dispatch(removeProduct(props))} class="bin-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 39 7"
            class="bin-top"
          >
            <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
            <line
              stroke-width="3"
              stroke="white"
              y2="1.5"
              x2="26.0357"
              y1="1.5"
              x1="12"
            ></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 33 39"
            class="bin-bottom"
          >
            <mask fill="white" id="path-1-inside-1_8_19">
              <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
            </mask>
            <path
              mask="url(#path-1-inside-1_8_19)"
              fill="white"
              d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
            ></path>
            <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
            <path stroke-width="4" stroke="white" d="M21 6V29"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 89 80"
            class="garbage"
          >
            <path
              fill="white"
              d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
import "./Cartcard.css";
import { useDispatch } from "react-redux";
// import all_product from "../assets/all_product.js";

export default Cartcard;
