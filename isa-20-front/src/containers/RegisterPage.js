import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerAction } from '../store/actions/authActions';
import i18n from '../i18n/i18n';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  validateAddress,
  validateCity,
  validateCountry,
  validatePhoneNumber,
  validateConfirmPassword,
  validateSocialSecurityNumber,
} from '../utils/validators';
import { PagePath } from '../utils/constants';
import { makeSelectEmailError } from '../store/selectors/userSelector';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [socialSecurityNumber, setSocialSecurityNumber] = useState('');

  const dispatch = useDispatch();
  const emailError = useSelector(makeSelectEmailError());

  const handleRegister = () => {
    if (
      !validateEmail(email) &&
      !validatePassword(password) &&
      !validateConfirmPassword(confirmPassword, password) &&
      !validateFirstName(firstName) &&
      !validateLastName(lastName) &&
      !validateAddress(address) &&
      !validateCity(city) &&
      !validateCountry(country) &&
      !validatePhoneNumber(phoneNumber) &&
      !validateSocialSecurityNumber(socialSecurityNumber)
    )
      dispatch(
        registerAction({
          email,
          password,
          firstName,
          lastName,
          address,
          city,
          country,
          phoneNumber,
          socialSecurityNumber,
        })
      );
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {i18n.t('auth.register')}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              handleRegister();
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
            {'\n'}
            {emailError && i18n.t('errorMessages.emailTaken')}
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
            {validateConfirmPassword(confirmPassword, password)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstName"
              label={i18n.t('auth.firstName')}
              type="firstName"
              id="firstName"
              autoComplete="current-firstName"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            {validateFirstName(firstName)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label={i18n.t('auth.lastName')}
              type="lastName"
              id="lastName"
              autoComplete="current-lastName"
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
            {validateLastName(lastName)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="address"
              label={i18n.t('auth.address')}
              type="address"
              id="address"
              autoComplete="current-address"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
            />
            {validateAddress(address)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label={i18n.t('auth.city')}
              type="city"
              id="city"
              autoComplete="current-city"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
            {validateCity(city)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="country"
              label={i18n.t('auth.country')}
              type="country"
              id="country"
              autoComplete="current-country"
              value={country}
              onChange={({ target }) => setCountry(target.value)}
            />
            {validateCountry(country)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phoneNumber"
              label={i18n.t('auth.phoneNumber')}
              type="phoneNumber"
              id="phoneNumber"
              autoComplete="current-phoneNumber"
              value={phoneNumber}
              onChange={({ target }) => setPhoneNumber(target.value)}
            />
            {validatePhoneNumber(phoneNumber)}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="socialSecurityNumber"
              label={i18n.t('auth.socialSecurityNumber')}
              type="socialSecurityNumber"
              id="socialSecurityNumber"
              autoComplete="current-socialSecurityNumber"
              value={socialSecurityNumber}
              onChange={({ target }) => setSocialSecurityNumber(target.value)}
            />
            {validateSocialSecurityNumber(socialSecurityNumber)}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {i18n.t('auth.register')}
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2">
                  <NavLink to={PagePath.LOGIN}>
                    {i18n.t('auth.alreadyHaveAnAccount')}
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

export default RegisterPage;
