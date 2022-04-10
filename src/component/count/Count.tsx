type countProps = {
  handleNumber: (active: number) => void;
  num: number;
};

const Count = ({ handleNumber, num }: countProps) => {
  return (
    <div>
      <h1>Count = {num}</h1>
      <button onClick={() => handleNumber(++num)}>increase</button>
      <button
        onClick={() => {
          num > 0 && handleNumber(--num);
        }}
      >
        decrease
      </button>
    </div>
  );
};

export default Count;
