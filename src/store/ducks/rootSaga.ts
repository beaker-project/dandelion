import { all, takeLatest } from 'redux-saga/effects';

import load from './localtime/sagas';
import { LocaltimeTypes } from './localtime/types';

export default function* rootSaga() {
  return yield all([takeLatest(LocaltimeTypes.LOAD_REQUEST, load)]);
}
