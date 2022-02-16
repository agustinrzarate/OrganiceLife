import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '../../sagaActions/auth.actions';
import { clearState, errorAuth, setToken } from '../../slices/authSlice';
import { useAppDispatch } from './../../app/hooks';



export function* login({payload}: any): any {
  try {
      yield auth().signInWithEmailAndPassword(payload.user, payload.pass);
       yield auth().onAuthStateChanged(onAuthStateChanged);
  } catch (error) {
      yield put(errorAuth(error));
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
