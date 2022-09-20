import { checkingCredentials } from "../../../src/store/auth";
import { chekingAutentication } from "../../../src/store/auth/thuks";

jest.mock("../../../src/firebase/provider");

describe("Pruebas en AuthThunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de invocar el chekingCredentials", async () => {
    await chekingAutentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
