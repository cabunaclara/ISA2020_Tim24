import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../store/actions/authActions';
import i18n from '../i18n/i18n';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validateAddress,
  validateCity,
  validateCountry,
  validatePhoneNumber,
} from '../utils/validators';
import { PagePath } from '../utils/constants';
import { makeSelectEmailError } from '../store/selectors/userSelector';
import authService from '../services/AuthService';

const UpdateProfilePage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [socialSecurityNumber, setSocialSecurityNumber] = useState('');

  const dispatch = useDispatch();
  const emailError = useSelector(makeSelectEmailError());

  useEffect(() => {
    const user = authService.getUser();
    setEmail(user.email);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress(user.address);
    setCity(user.city);
    setCountry(user.country);
    setPhoneNumber(user.phoneNumber);
    setSocialSecurityNumber(user.socialSecurityNumber);
  }, []);

  const handleUpdateProfile = () => {
    if (
      !validateEmail(email) &&
      !validateFirstName(firstName) &&
      !validateLastName(lastName) &&
      !validateAddress(address) &&
      !validateCity(city) &&
      !validateCountry(country) &&
      !validatePhoneNumber(phoneNumber)
    )
      dispatch(
        updateUserProfile({
          email,
          firstName,
          lastName,
          address,
          city,
          country,
          phoneNumber,
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
            {i18n.t('auth.updateProfile')}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              handleUpdateProfile();
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
              type="text"
              id="socialSecurityNumber"
              autoComplete="current-socialSecurityNumber"
              value={socialSecurityNumber}
              disabled
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {i18n.t('auth.updateProfile')}
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default UpdateProfilePage;
