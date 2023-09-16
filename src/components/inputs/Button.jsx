import React from "react";

const Button = ({
  onClick,
  additionalClassName,
  buttonIcon,
  children,
}) => {
  return (
    <button onClick={onClick} className={`button ` + additionalClassName}>
      {children ? (
        children
      ) : (
        <>
          <i class={buttonIcon}></i>
        </>
      )}
    </button>
  );
};

export default Button;
