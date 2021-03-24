import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { firebase, googleAuthProvider} from "../firebase/firebase-config";

export const startLoginEmailPassword = (email,password) => {
  //peticion asyncrona que necesita un middleware, el dispatch lo obtiene gracias al thunk
  return (dispatch) => {

    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then (({user})=>{
      dispatch(
        login(user.uid, user.displayName)
      );
      dispatch(finishLoading());
    })
    .catch (e => {
      console.log(e);
      dispatch(finishLoading());
    })
  }
}

export const startRegisterWithEmailPasswordName = (email,password,name) => {
  //create register with email password name
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then (async({user}) => {
      
      await user.updateProfile({displayName: name});
      dispatch(
        login(user.uid, user.displayName)
      );
  })
    .catch (e => {
      console.log(e);
    })
}}

export const startGoogleLogin = () => {
  //google signIn desfracmentacion user para obtener uid, displayname
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then (({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      });
  }
}

export const login = (uid, displayName) => ({
 
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const starLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})
