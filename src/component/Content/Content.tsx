type contentProps = {
  children: React.ReactNode;
};

const Content = (props: contentProps) => {
  return (
    <div>
      <h1> {props.children} </h1>
    </div>
  );
};

export default Content;
