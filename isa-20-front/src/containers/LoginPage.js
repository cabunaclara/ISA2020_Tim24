import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInAction } from '../store/actions/authActions';
import i18n from '../i18n/i18n';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogIn = () => dispatch(logInAction({ userName, password }));

  return (
    <>
      <form>
        <label>{i18n.t('auth.username')}</label>
        <input
          type="text"
          onChange={({ target }) => setUserName(target.value)}
        />
        <label>{i18n.t('auth.password')}</label>
        <input
          type="text"
          onChange={({ target }) => setPassword(target.value)}
        />
        <input type="submit" onSubmit={handleLogIn} />
      </form>
    </>
  );
};

export default LoginPage;
