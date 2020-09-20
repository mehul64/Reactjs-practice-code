import React, { useReducer } from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import UseStateObject from "./components/UseStateObject";
import UseStateArray from "./components/UseStateArray";
import UseEffectRender from "./components/UseEffectRender";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import UseReducer from "./components/UseReducer";
import CompA from "./components/context/compA";
import CompC from "./components/context/compC";
import CompB from "./components/context/compB";
import DataFetchingTwo from "./components/DataFetching2";
import ParentComponent from "./components/usecallback/Parentcomp";

export const contextValue = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <contextValue.Provider value={{ countState: count, dispatch: dispatch }}>
      <div className="App">
        Count - {count}
        <CompA />
        <CompB />
        <CompC />
      </div>
    </contextValue.Provider>
    // <DataFetchingTwo />
    // <ParentComponent />
  );
}

export default App;
