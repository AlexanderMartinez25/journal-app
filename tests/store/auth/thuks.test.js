import { signInWidthGoolge } from "../../../src/firebase/provider";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
  chekingAutentication,
  startGoogleSingIn,
} from "../../../src/store/auth/thuks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/provider");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de invocar el chekingCredentials", async () => {
    await chekingAutentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSingIn debe de llamar chekingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWidthGoolge.mockResolvedValue(loginData);

    //thunk
    await startGoogleSingIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSingIn debe de llamar chekingCredentials y logout - Error", async () => {
    const loginData = { ok: false, errorMessage: "Un error en Google" };
    await signInWidthGoolge.mockResolvedValue(loginData);

    //thunk
    await startGoogleSingIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
