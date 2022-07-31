import React, { useState } from "react";

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add one</button>
      <div role='contentinfo'>Count is {count}</div>
    </div>
  )
};
