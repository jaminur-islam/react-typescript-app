import React, { useState } from "react";
import Button from "./component/button/Button";
import Heading from "./component/childHeading/Heading";
import Content from "./component/Content/Content";
import Green from "./component/green/Green";

import Person from "./component/person/Person";
import PersonList from "./component/personList/PersonList";
import ContainerStyle from "./component/passStyle/ConteinerStyle";
import Input from "./component/inputValue/Input";
import Stuatus from "./component/status/Stuatus";
import GetType from "./component/GetType/GetType";
import Count from "./component/count/Count";
import User from "./component/user/User";
import Reducer from "./component/reducerHook/Reducer";

function App() {
  const [num, hadleNumber] = useState(0);
  const personName = {
    first: "sagor",
    last: "miya",
  };

  const personList = [
    {
      first: "sagor",
      last: "miya",
    },
    {
      first: "sagor2",
      last: "miya2",
    },
    {
      first: "sagor3",
      last: "miya3",
    },
  ];
  //===================== handle click function ==================//
  /*   const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("hi handsam", e, id);
  }; */

  const styles = {
    border: "2px solid green",
    padding: "16px",
  };

  return (
    <div
      style={{
        width: "1180px",
        margin: "auto",
        padding: "20px",
      }}
    >
      {/*=========== reducer state =========== */}
      <Reducer />
      {/* user */}
      <User />
      {/* count number  */}
      <Count handleNumber={hadleNumber} num={num} />

      {/* get type  */}
      <GetType name="sagor" age={20} />
      {/* Input value  */}
      <Input
        handleChange={(e) => {
          console.log(e.target.value);
        }}
      />
      {/* pass Style */}
      <ContainerStyle styles={styles} />

      <div
        style={{
          width: "1180px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            width: "1180px",
            margin: "auto",
            padding: "20px",
            color: "red",
          }}
        >
          welcome to typescript
        </h1>
        {/* ====================== Button pass function ==================== */}
        <Button
          handleClick={(e, id) => {
            console.log("hi handsome", e, id);
          }}
        />

        {
          // ============================ Green =================
          <Green name="jaminur islam welcome" /* count={20} */ boy={false} />
          /*
      <Person personName={personName} />
      <PersonList personList={personList} /> */
        }
        {/* ====================Stutas ===================// */}
        <Stuatus status="error" />

        {/* ====================headingt Child control ==================== */}
        <Heading>this is rafsan the chuto vai</Heading>
        <Content>
          <Heading>this is rafsan the chuto vai</Heading>
        </Content>
      </div>
    </div>
  );
}

export default App;
