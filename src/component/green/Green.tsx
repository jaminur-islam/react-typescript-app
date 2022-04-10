import React from "react";
type greenProps = {
  name: string;
  count?: number;
  boy: boolean;
};

const Green = (props: greenProps) => {
  const { count = 0, name, boy } = props;
  return (
    <div>
      <h1> {name} welcome to our my first app react typescript </h1>
      {boy ? <p>{count} her age </p> : <p>{count} his age </p>}
    </div>
  );
};

export default Green;
