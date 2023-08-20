import helloReducer from '@redux/hello/hello.slice';
import { HelloStateType } from '@redux/hello/hello.types';

export type StateType = {
  hello: HelloStateType
};

export const rootReducer = {
  hello: helloReducer,
};
