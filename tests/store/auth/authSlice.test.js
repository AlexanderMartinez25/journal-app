import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe("Purebas en el authSlice", () => {
  test('debe de regresa el estado inicial y llmarse "auth', () => {
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe("auth");
  });
});
