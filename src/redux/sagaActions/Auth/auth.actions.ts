export const authActions = {
    FETCH_LOGIN : 'FETCH_LOGIN'
}

export const fetchSignIn = (user) => {
    console.log("ESTE ES EL ACTION")
    console.log(user);
    return {
        type: authActions.FETCH_LOGIN,
        payload: user,
    }
}