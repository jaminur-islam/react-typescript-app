type haedChild = {
  children: string;
};

const Heading = (props: haedChild) => {
  return (
    <div>
      <h1> {props.children} </h1>
    </div>
  );
};

export default Heading;
