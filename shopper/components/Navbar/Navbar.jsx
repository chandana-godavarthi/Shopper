import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAuth, setUserId } from "../../redux/cartSlice";
import photo from "../assets/profile-photo-default.webp";

const Navbar = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cartslice.count);
  let [menu, setMenu] = useState("shop");
  const navigate = useNavigate();
  let [flag, setFlag] = useState(true);
  const isAuth = useSelector((state) => state.cartslice.isAuth);
  const userid = useSelector((state) => state.cartslice.userid);
  const item = useSelector((state) => state.cartslice.item);
  const proPrice = useSelector((state) => state.cartslice.proPrice);
  const checkPrice = useSelector((state) => state.cartslice.checkPrice);
  const shipPrice = useSelector((state) => state.cartslice.shipPrice);
  const profimg = useSelector((state) => state.profileslice.profileimg);
  const loginFn = async () => {
    setMenu("none");
    try {
      const response = await axios.get(
        "https://shopper-1-9e3s.onrender.com/api/auth",
        {
          withCredentials: true,
        }
      );
      if (response.data.authenticated) {
        setFlag(true);
        dispatch(setAuth({ auth: true }));
      } else setFlag(false);
    } catch {
      setFlag(false);
    }
  };
  const logoutFn = async () => {
    try {
      console.log(count);

      const x = await axios.post(
        "https://shopper-1-9e3s.onrender.com/api/store/userdata",
        {
          userid: userid,
          item: item,
          proPrice: proPrice,
          shipPrice: shipPrice,
          checkPrice: checkPrice,
          count: count,
        },
        { withCredentials: true }
      );
      dispatch(setAuth(false));
      dispatch(setUserId(null));
      const res = await axios.get(
        "https://shopper-1-9e3s.onrender.com/logout",
        {
          withCredentials: true,
        }
      );
      window.location.replace("https://shopper-1-9e3s.onrender.com/login");
    } catch {
      console.log("error");
    }
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" className="nav-logo-img" />
        <p>SHOPPER</p>
      </div>
      <ul
        className={flag ? "nav-menu-closed nav-menu" : "nav-menu-open nav-menu"}
      >
        <li
          onClick={() => {
            setMenu("shop");
            setFlag(true);
          }}
        >
          <Link to="/">Shop{menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
            setFlag(true);
          }}
        >
          <Link to="/men">Men{menu === "men" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
            setFlag(true);
          }}
        >
          <Link to="/women">Women{menu === "women" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            setFlag(true);
          }}
        >
          <Link to="/kid">Kids{menu === "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {isAuth ? (
          <>
            <button onClick={logoutFn} className="login_btn">
              Logout
            </button>
            <img
              className="nav-pro-photo"
              onClick={() => {
                setMenu("none");
                navigate("/profile");
              }}
              src={profimg ? profimg : photo}
              alt=""
            />
          </>
        ) : (
          <button
            onClick={() =>
              (window.location.href =
                "https://shopper-1-9e3s.onrender.com/login")
            }
            className="login_btn"
          >
            Login
          </button>
        )}
        <img
          onClick={() => navigate("/cart")}
          src={cart_icon}
          alt="cart"
          className="cart-icon-image"
        />
        <p>{count}</p>
      </div>
      <div className="hamburger-menu">
        {flag ? (
          <GiHamburgerMenu onClick={() => setFlag(false)} />
        ) : (
          <RxCross2 onClick={() => setFlag(true)} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
