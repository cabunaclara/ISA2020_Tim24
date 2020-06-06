import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logInAction } from '../store/actions/authActions';
import i18n from '../i18n/i18n';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validateEmail, validatePassword } from '../utils/validators';
import { PagePath } from '../utils/constants';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogIn = () => {
    if (validateEmail(email) === '' && validatePassword(password) === '')
      dispatch(logInAction({ email, password }));
  };

  const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {i18n.t('copyright')} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {i18n.t('auth.signIn')}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              handleLogIn();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={i18n.t('auth.email')}
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            {validateEmail(email)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={i18n.t('auth.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            {validatePassword(password)}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {i18n.t('auth.signIn')}
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2">
                  <NavLink to={PagePath.REGISTER}>
                    {i18n.t('auth.dontHaveAnAccount')}
                  </NavLink>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
