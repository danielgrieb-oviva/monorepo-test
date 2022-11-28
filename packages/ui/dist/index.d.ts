export { Input, InputProps } from '@chakra-ui/react';

declare const Button: () => JSX.Element;

declare const add: (a: number, b: number) => number;
declare const subtract: (a: number, b: number) => number;
declare const multiply: (a: number, b: number) => number;

export { Button as UnstyledButton, add, multiply, subtract };
