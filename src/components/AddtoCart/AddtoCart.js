import React, { useState } from "react";
import "./AddtoCart.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "../AmountButtons/AmountButtons";

const AddtoCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setmainColor] = useState(colors[0]);
  const [amount, setamount] = useState(1);

  const increase = () => {
    setamount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setamount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <div className="btn-container">
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <Link to="/cart" className="addTo__cart__btn">
        add to cart
      </Link>
    </div>
  );
};

export default AddtoCart;
