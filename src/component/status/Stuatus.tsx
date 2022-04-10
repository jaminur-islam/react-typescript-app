type statusProps = {
  status: "loading" | "success" | "error";
};

const Stuatus = ({ status }: statusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading..";
  } else if (status === "success") {
    message = "Data fetched successfully";
  } else if (status === "error") {
    message = "Data not fetched successfully";
  }
  return (
    <div>
      coming soon .. <h1> {message} </h1>
    </div>
  );
};

export default Stuatus;
