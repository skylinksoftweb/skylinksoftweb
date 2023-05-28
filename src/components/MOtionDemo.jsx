import React from "react";
import { Motion, spring } from "react-motion";

export const MOtionDemo = () => {
  return (
    <div>
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        {(value) => <div>{value.x}</div>}
      </Motion>
    </div>
  );
};
