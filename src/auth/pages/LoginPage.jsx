import { Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Grid,Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout titulo='Login'>
      <form>

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
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>


          </Grid>

        </form>
    </AuthLayout>
  )
}
