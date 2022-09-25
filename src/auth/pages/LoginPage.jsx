import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startGoogleSingIn, startLoginWidthEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: ''
}


export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticated = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData)

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch(startLoginWidthEmailPassword({ email, password }))
  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');
    dispatch(startGoogleSingIn());
  }


  return (
    <AuthLayout title="Login">
      <form aria-label='submit-form' className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              inputProps={{
                'data-testid': 'password'
              }}
              name='password'
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}
          >
            <Grid
              item
              xs={12}

            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                variant="contained"
                fullWidth
                aria-label='google-btn'
                onClick={onGoogleSingIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
