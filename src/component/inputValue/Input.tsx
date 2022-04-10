import React from "react";

type inputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleChange }: inputProps) => {
  return <input onChange={(e) => handleChange(e)} type="text" />;
};

export default Input;
