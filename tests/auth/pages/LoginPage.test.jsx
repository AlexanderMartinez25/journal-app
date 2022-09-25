import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { MemoryRouter } from "react-router-dom"

import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { authSlice } from "../../../src/store/auth"
import { startGoogleSingIn } from "../../../src/store/auth/thuks"
import { notauthenticatedState } from "../../fixtures/authFixtures"

const mockStartGoogleSingIn = jest.fn();

jest.mock('../../../src/store/auth/thuks'), () => ({
  //ejecuetar funcion al thunk startGoogleSingIn
  startGoogleSingIn: () => mockStartGoogleSingIn
})

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  proloadedState: {
    auth: notauthenticatedState
  }
})

describe('Pruebas en  <LoginPage />', () => {
  test('debe de mostrar el componente correctamente', () => {

    render(
      <Provider store={store} >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    )

    // screen.debug()
    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)

  })

  test('botón de google debe de llamar el startGoogleSignIn', () => {
    render(
      <Provider store={store} >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click(googleBtn);
    expect(mockStartGoogleSingIn).toHaveBeenCalled();

  })

})