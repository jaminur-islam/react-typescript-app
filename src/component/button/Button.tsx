import React from "react";

type buttonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: buttonProps) => {
  return <button onClick={(e) => handleClick(e, 10)}>Click event </button>;
};

export default Button;
