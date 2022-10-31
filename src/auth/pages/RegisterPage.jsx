import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout titulo="Crear una cuenta">
       <form>

          <Grid item xs={12} sx={{ mt: 2}} >

            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            >
            </TextField>

          </Grid>

          <Grid item xs={12} sx={{ mt: 2}} >

            <TextField
              label="Correo"
              type="email"
              placeholder="Ingresa tu correo"
              fullWidth
            >
            </TextField>

          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>

          <TextField
              label="Clave"
              type="password"
              placeholder="Clave de acceso"
              fullWidth
            >
            </TextField>

          </Grid >
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
                <Link component={ RouterLink } color='inherit' to="/auth/login">
                  Ingresar
                </Link>
              </Grid>


            </Grid>

          </form>
    </AuthLayout>
  )
}
