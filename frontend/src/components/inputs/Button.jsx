import React from "react";

const Button = ({ buttonText, onClick, additionalClassName }) => {
  return (
    <button onClick={onClick} className={`button ` + additionalClassName}>
      {buttonText}
    </button>
  );
};

export default Button;
