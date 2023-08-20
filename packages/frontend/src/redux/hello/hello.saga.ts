import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, call, CallEffect, PutEffect, all } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';

import { GET_HELLO, HelloType } from './hello.types';
import { getHelloActionSuccess } from './hello.slice';

function* healthZSaga (): Generator<CallEffect<AxiosResponse<HelloType>> | PutEffect<AnyAction>, void, AxiosResponse<HelloType>> {
  try {
    const response: AxiosResponse<HelloType> = yield call((a: string) => axios.get<HelloType>(a), 'http://127.0.0.1:3001');
    yield put(getHelloActionSuccess(response.data));
  } catch (error) {
    yield put(getHelloActionSuccess('error!!!'));
  }
}

export default function* () {
  yield all([
    takeLatest(GET_HELLO, healthZSaga),
  ]);
}
