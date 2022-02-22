export const authActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

export const fetchSignIn = user => {
  return {
    type: authActions.SIGN_IN,
    payload: user,
  };
};

export const fetchSignUp = user => {
  return {
    type: authActions.SIGN_UP,
    payload: user,
  };
};
