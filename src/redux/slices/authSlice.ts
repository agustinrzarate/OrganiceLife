import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ObjectState {
  response: any,
  isLoading: boolean,
  token: string,
  error: any,
}

const initialState = {
  response: null,
  isLoading: false,
  token: null,
  error: null,
} as ObjectState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<string>) {
      state.response = action.payload
    },

    setToken(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.token = action.payload;
    },
    errorAuth(state, action: PayloadAction<any>) {
      state.isLoading = false,
      state.error = action.payload;
    },
    clearState(state) {
      state.response = null;
      state.isLoading = false;
      state.token = null;
      state.error = null;
    }
  },
});

export const { setToken, errorAuth, clearState, getUser} = authSlice.actions;
export default authSlice.reducer;
