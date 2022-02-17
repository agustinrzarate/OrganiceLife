import {all} from 'redux-saga/effects';
import Auth from './auth/auth.saga';

export default function* rootSaga() {
  yield all([
    Auth(),
  ]);
}
