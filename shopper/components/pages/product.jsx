import React, { useEffect, useState } from "react";
import all_product from "../assets/all_product";
import { Link, useParams } from "react-router-dom";
import "./product.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import Item from "../items/Item";
import data_product from "../assets/data";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cartslice.count);
  const params = useParams();
  let founduser = all_product.find((eachUser) => eachUser.id == params.ID);
  let count = 4;
  let [size, setSize] = useState("p");
  console.log(founduser.id);
  const [user, setUser] = useState(founduser);
  const [imge, setImge] = useState(founduser.image);
  useEffect(() => {
    window.scrollTo(0, 0);
    founduser = all_product.find((eachUser) => eachUser.id == params.ID);
    setUser(founduser);
    setImge(founduser.image);
  }, [params.ID]);
  const desc = (
    <p>
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      <br />
      <br />
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
      {user.name}
    </p>
  );
  const review = (
    <p>
      {user.category}
      {user.name}
      {user.name}
      {user.category}
      {user.name}
      {user.name}
      {user.category}
      {user.name}
      {user.name}
      {user.category}
      {user.name}
      {user.name}
      {user.category}
      {user.name}
      {user.name}
      {user.category}
      {user.name}
      {user.name}
    </p>
  );
  const [desrevmain, setFn] = useState(desc);
  const [desrev, setDesrev] = useState("des");
  return (
    <div className="product-page">
      <div className="links">
        <Link to={`/${user.category}`}>{user.category}</Link>
        <span>&gt;</span>
        {user.name}
      </div>
      <div className="main-product">
        <div className="main-product-left">
          <img
            src={imge}
            onClick={() => setImge(imge)}
            alt=""
            className="s-1"
          />
          <img
            src={imge}
            onClick={() => setImge(imge)}
            alt=""
            className="s-2"
          />
          <img
            src={imge}
            onClick={() => setImge(imge)}
            alt=""
            className="s-3"
          />
          <img
            src={imge}
            onClick={() => setImge(imge)}
            alt=""
            className="s-4"
          />
          <img className="main-imge" src={imge} />
        </div>
        <div className="main-product-right">
          <div className="product-name">
            <h2>{user.name}</h2>
          </div>
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
          </div>
          {/* <span>&#40;122&#41;</span> */}
          <div className="prices">
            <p className="old-price">${user.old_price}</p>
            <p className="new-price">${user.new_price}</p>
          </div>
          <div className="product-description">
            <p>
              {user.name}
              {user.name}
            </p>
          </div>
          <div className="select-size">
            <h3>Select Size</h3>
            <button
              onClick={() => setSize("s")}
              className={size == "s" ? "size-btn" : ""}
            >
              S
            </button>
            <button
              onClick={() => setSize("m")}
              className={size == "m" ? "size-btn" : ""}
            >
              M
            </button>
            <button
              onClick={() => setSize("l")}
              className={size == "l" ? "size-btn" : ""}
            >
              L
            </button>
            <button
              onClick={() => setSize("xl")}
              className={size == "xl" ? "size-btn" : ""}
            >
              XL
            </button>
            <button
              onClick={() => setSize("xxl")}
              className={size == "xxl" ? "size-btn" : ""}
            >
              XXL
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(addProduct({ id: founduser.id }));
            }}
            className="product-add-to-cart"
          >
            Add To Cart
          </button>
          <div className="extras">
            <p>
              <span>Category</span> : {user.category}
            </p>
            <p>
              <span>Tags</span> : Modern,Latest
            </p>
          </div>
        </div>
      </div>
      <div className="des-rev-buttons">
        <button
          onClick={() => {
            setFn(desc);
            setDesrev("des");
          }}
          className={desrev == "des" ? "desc-review" : ""}
        >
          Description
        </button>
        <button
          onClick={() => {
            setFn(review), setDesrev("rev");
          }}
          className={desrev == "rev" ? "desc-review" : ""}
        >
          Reveiws
        </button>
      </div>
      <div className="description-reviews">
        <div className="des-rev-main">{desrevmain}</div>
      </div>
      <div className="product-related-products">
        <h2>Related Products</h2>
        <hr />
        <div className="product-related-main">
          {all_product.map((item) => {
            if (
              count > 0 &&
              item.id != user.id &&
              item.category == user.category
            ) {
              count--;
              return (
                <Item
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  id={item.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
