import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  signInWidthGoolge,
  registerUserWithEmailPassword,
  loginWidthEmailPassword,
  logoutFirebase,
} from "../../firebase/provider";
import { clearNotesLogout, deleteNoteById } from "../journal";
import { checkingCredentials, logout, login } from "./";

export const chekingAutentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWidthGoolge();
    console.log({ result });

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWidthEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWidthEmailPassword({ email, password });
    console.log(result);
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout());
    dispatch(logout());
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    //hacer referencia al documento
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    //borrar documento
    await deleteDoc(docRef);

    dispatch(deleteNoteById(note.id));
  };
};
