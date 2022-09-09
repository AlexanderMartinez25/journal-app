import {
  signInWidthGoolge,
  registerUserWithEmailPassword,
} from "../../firebase/provider";
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

    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    console.log(resp);
  };
};
