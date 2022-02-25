import auth from '@react-native-firebase/auth';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  ErrorTypesAuth,
  MessageErrorTypes,
} from '../../../utils/types/errorTypesAuth';
import {authActions} from '../../sagaActions/Auth/auth.actions';
import {errorAuth, getUser} from '../../slices/authSlice';

export function* handlerError(error: any) {
  const {WRONG_PASSWORD, USER_NOT_FOUND, TOO_MANY_REQUESTS} = MessageErrorTypes;
  switch (error.code) {
    case ErrorTypesAuth.WRONG_PASSWORD:
      yield put(errorAuth(WRONG_PASSWORD));
      break;
    case ErrorTypesAuth.USER_NOT_FOUND:
      yield put(errorAuth(USER_NOT_FOUND));
      break;
    case ErrorTypesAuth.TOO_MANY_REQUESTS:
      yield put(errorAuth(TOO_MANY_REQUESTS));
      break;
    default:
      break;
  }
}

export function* login({payload}: any): any {
  const {email, password} = payload;
  try {
    console.log(payload);
    let response = yield auth().signInWithEmailAndPassword(email, password);
    yield put(getUser(response));
    yield put(errorAuth(null));
  } catch (error) {
    yield call(handlerError, error);
    console.log(error.code);
  }
}

export function* signUp({payload}: any): any {
  const {email, password} = payload;
  try {
    let response = yield auth().createUserWithEmailAndPassword(email, password);
    console.log(response);
  } catch (error) {
    console.log(error.code);
  }
}

export default function* Auth() {
  yield takeLatest(authActions.SIGN_IN, login);
  yield takeLatest(authActions.SIGN_UP, signUp);
}
