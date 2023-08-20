import { all, fork } from 'redux-saga/effects';
import hello from '@redux/hello/hello.saga';

export const rootSaga = function* () {
  yield all([
    fork(hello),
  ]);
};
