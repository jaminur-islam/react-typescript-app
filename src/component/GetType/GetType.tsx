import { getTypeProps } from "./Write.type";

const GetType = ({ name, age }: getTypeProps) => {
  return (
    <div>
      <h1>Get type </h1>
      <h4>{name}</h4>
      <p>{age}</p>
    </div>
  );
};

export default GetType;
