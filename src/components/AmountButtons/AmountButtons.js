import React from "react";
import "./AmountButtons.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="amount">
      <button className="amount-btn" type="button" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button className="amount-btn" type="button" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
