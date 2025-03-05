import React from "react";
import "./wishlist.css";
import all_products from "../assets/all_product";
import Item from "../items/Item.jsx";
import { TiDeleteOutline } from "react-icons/ti";


const Wishlist = () => {
  return (
    <div className="whishlist-main">
      <div className="wishlist-header">
        <h1>Wishlist</h1>
      </div>
      <div className="wishlist-body">
        {all_products.map((item) => {
          return (
            <div className="wishlist-item-card">
              <Item
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                id={item.id}
              />
              <TiDeleteOutline className="remove-wishlist" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
