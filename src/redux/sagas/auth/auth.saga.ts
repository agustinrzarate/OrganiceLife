import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '../../sagaActions/Auth/auth.actions';
import { clearState, errorAuth, setToken } from '../../slices/authSlice';
import { useAppDispatch } from './../../app/hooks';



export function* login({ payload }: any): any {
  const {email, password} = payload
  try {
    console.log(payload);
     let response = yield auth().signInWithEmailAndPassword(email, password);
     yield auth().onAuthStateChanged(onAuthStateChanged);
    console.log(response);
  } catch (error) {
    yield put(errorAuth(error));
    console.log('No existis capo')
  }
}

async function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
  const dispatch = useAppDispatch();
  if (user) {
    const token = await user.getIdToken();
    dispatch(setToken(token));
  }
  else {
    dispatch(clearState());
  }
}

export default function* Auth() {
  yield takeLatest(authActions.FETCH_LOGIN, login);
}
