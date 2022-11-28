"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Input: () => import_react.Input,
  InputProps: () => import_react.InputProps,
  UnstyledButton: () => Button,
  add: () => add,
  multiply: () => multiply,
  subtract: () => subtract
});
module.exports = __toCommonJS(src_exports);

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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    children: multiply(1, 2)
  });
};

// ../common/src/components/index.ts
var import_react = require("@chakra-ui/react");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input,
  InputProps,
  UnstyledButton,
  add,
  multiply,
  subtract
});
//# sourceMappingURL=index.js.map