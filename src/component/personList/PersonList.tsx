type personProps = {
  personList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personProps) => {
  const { personList } = props;
  return (
    <div>
      <h1> Person List is coming soon </h1>
      {personList.map((person) => {
        return (
          <div
            key={person.first}
            style={{
              border: "1px solid green",
              margin: "10px",
              textAlign: "center",
            }}
          >
            <h1>
              {" "}
              {person.first} {person.last}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default PersonList;
