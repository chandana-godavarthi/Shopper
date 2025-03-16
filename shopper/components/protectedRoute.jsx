import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  setAuth,
  setcheckPrice,
  setCount,
  setItem,
  setproPrice,
  setshipPrice,
  setUserId,
} from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import cartModel from "../../backend/mongoDb/models/cartModel";
import { setemail, setname, setprofileimg } from "../redux/profileSlice";

const ProtectedRoute = () => {
  var [flag, setFlag] = useState(null);
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.cartslice.userid);
  const FN = async () => {
    try {
      const response = await axios.get(
        "https://shopper-1-9e3s.onrender.com/api/auth",
        {
          withCredentials: true,
        }
      );
      if (response.data.authenticated) {
        setFlag(true);
        dispatch(setAuth(response.data.authenticated));
        console.log(response.data.userid);
        dispatch(setUserId(response.data.userid));
        const datares = await axios.get(
          "https://shopper-1-9e3s.onrender.com/api/store/userdata",
          { withCredentials: true }
        );
        // console.log(userID);
        const profdata = await axios.get(
          "https://shopper-1-9e3s.onrender.com/api/profile",
          {
            withCredentials: true,
          }
        );
        console.log(profdata.data);
        if (datares.data.item) dispatch(setItem(datares.data.item));
        if (datares.data.checkPrice)
          dispatch(setcheckPrice(datares.data.checkPrice));
        if (datares.data.proPrice) dispatch(setproPrice(datares.data.proPrice));
        if (datares.data.shipPrice)
          dispatch(setshipPrice(datares.data.shipPrice));
        if (datares.data.count) dispatch(setCount(datares.data.count));
        //adding profile details
        dispatch(setprofileimg(profdata.data.imgurl));
        dispatch(setemail(profdata.data.email));
        dispatch(setname(profdata.data.name));
      } else setFlag(false);
    } catch {
      setFlag(false);
    }
  };
  useEffect(() => {
    FN();
  }, []);

  // useEffect(()=>{
  //   console.log(userID);

  // },[userID])
  if (flag == null) return <div>Loading...</div>;
  return flag ? (
    <Outlet />
  ) : (
    (window.location.href = "https://shopper-1-9e3s.onrender.com/login")
  );
};

export default ProtectedRoute;
