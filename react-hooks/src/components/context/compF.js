import React, { useContext } from "react";
import { contextValue } from "../../App";

function CompF() {
  const context = useContext(contextValue);
  return (
    <div>
      Count - {context.countState}
      <button onClick={() => context.dispatch("increment")}>Increment</button>
      <button onClick={() => context.dispatch("decrement")}>Decrement</button>
      <button onClick={() => context.dispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompF;
