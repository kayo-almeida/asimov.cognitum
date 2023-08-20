export type HelloType = string;

export type IHelloState = {
  message: HelloType;
};

export type HelloStateType = {
  data: IHelloState
};

export const HELLO = 'hello';
export type Hello = typeof HELLO;

export const GET_HELLO = `${HELLO}/getHelloAction`;
export type GetHello = typeof GET_HELLO;
