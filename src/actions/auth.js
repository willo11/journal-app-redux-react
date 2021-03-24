import { types } from "../types/types";

export const startLoginEmailPassword = (email,password) => {
  //peticion asyncrona que necesita un middleware, el dispatch lo octiene gracias al thunk
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123,'william'));
    }, 3500);
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
