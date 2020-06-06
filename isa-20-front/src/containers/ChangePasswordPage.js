import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  logInAction,
  changePasswordAction,
} from '../store/actions/authActions';
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
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../utils/validators';
import { PagePath } from '../utils/constants';
import { makeSelectPasswordError } from '../store/selectors/userSelector';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const passwordError = useSelector(makeSelectPasswordError());

  const handleChangePassword = () => {
    if (
      !validatePassword(oldPassword) &&
      !validatePassword(newPassword) &&
      !validateConfirmPassword(confirmPassword, newPassword)
    )
      dispatch(changePasswordAction({ oldPassword, newPassword }));
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
              handleChangePassword();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="oldPassword"
              label={i18n.t('auth.oldPassword')}
              type="password"
              id="oldPassword"
              autoComplete="current-oldPassword"
              value={oldPassword}
              onChange={({ target }) => setOldPassword(target.value)}
            />
            {validatePassword(oldPassword, 'Old password')}
            {'\n'}
            {passwordError && i18n.t('errorMessages.wrongPassword')}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newPassword"
              label={i18n.t('auth.newPassword')}
              type="password"
              id="newPassword"
              autoComplete="current-newPassword"
              value={newPassword}
              onChange={({ target }) => setNewPassword(target.value)}
            />
            {validatePassword(newPassword)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label={i18n.t('auth.confirmPassword')}
              type="password"
              id="confirmPassword"
              autoComplete="current-confirmPassword"
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
            />
            {validateConfirmPassword(newPassword, confirmPassword)}
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

export default ChangePasswordPage;
