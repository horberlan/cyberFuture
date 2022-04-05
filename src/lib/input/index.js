import React from "react";
import "./style.css";

const CyberInput = ({ type = "text", label, value}) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
    />
  </div>
);

export default CyberInput;