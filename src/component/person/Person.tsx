import { Name } from "../GetType/Write.type";

type personProps = {
  personName: Name;
};

const Person = (props: personProps) => {
  const { personName } = props;
  const { first, last } = personName;
  return (
    <div>
      <p>
        this is person fist name is {first} and last name {last}
      </p>
    </div>
  );
};

export default Person;
