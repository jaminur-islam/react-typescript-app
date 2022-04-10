import { useReducer } from "react";

const initValue = { count: 0, counter2: 0 };

type stateType = {
  count: number;
};

type updateAction = {
  type: "increase" | "decrease";
  payload: number;
};

type resetAction = {
  type: "reset";
};

type actiontype = updateAction | resetAction;

/* type actiontype = {
  type: "increase" | "decrease" | "reset";
  payload?: number;
}; */

const reducer = (state: stateType, action: actiontype) => {
  switch (action.type) {
    case "increase":
      return {
        count: state.count + /* (action.payload || 0) */ action.payload,
      };
    case "decrease":
      return {
        count: state.count - /* (action.payload || 0) */ action.payload,
      };

    case "reset":
      return initValue;
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initValue);
  console.log(state);
  return (
    <div>
      <h1>COUNT {state.count} </h1>
      <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
        Increase
      </button>
      <button
        onClick={() => {
          state.count > 10 && dispatch({ type: "decrease", payload: 10 });
        }}
      >
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;

/* import React, { useReducer } from "react";

type counter = {
  count: number;
};
type counterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: counter, action: counterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Big Counter {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increase
      </button>
      <button
        onClick={() => {
          state.count > 10 && dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Reducer;
 */
