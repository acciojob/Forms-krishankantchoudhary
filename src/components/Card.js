import React from "react";

const Card = ({ children }) => {
  const style = {
    width: "350px",
    padding: "20px",
    margin: "20px auto",
    border: "1px solid grey",
    borderRadius: "8px",
  };

  return <div style={style}>{children}</div>;
};

export default Card;
