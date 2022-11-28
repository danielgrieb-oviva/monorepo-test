// ../math-helpers/src/index.ts
var add = (a, b) => {
  return a + b;
};
var subtract = (a, b) => {
  return a - b;
};
var multiply = (a, b) => {
  return a * b;
};

// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("button", {
    children: multiply(1, 2)
  });
};

// ../common/src/components/index.ts
import { Input, InputProps } from "@chakra-ui/react";
export {
  Input,
  InputProps,
  Button as UnstyledButton,
  add,
  multiply,
  subtract
};
//# sourceMappingURL=index.mjs.map