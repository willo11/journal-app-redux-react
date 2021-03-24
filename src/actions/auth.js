import { types } from "../types/types";
import { firebase, googleAuthProvider} from "../firebase/firebase-config";

export const startLoginEmailPassword = (email,password) => {
  //peticion asyncrona que necesita un middleware, el dispatch lo obtiene gracias al thunk
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123,'william'));
    }, 3500);
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
