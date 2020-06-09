import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import NoMatch from './NoMatch';
import { PagePath } from '../../utils/constants';
import HomePage from '../../containers/HomePage';
import LoginPage from '../../containers/LoginPage';
import RegisterPage from '../../containers/RegisterPage';
import ChangePasswordPage from '../../containers/ChangePasswordPage';
import authService from '../../services/AuthService';
import UpdateProfilePage from '../../containers/UpdateProfilePage';
import NavBar from '../Shared/NavBar';

export const routes = [
  { path: PagePath.HOME, exact: true, authRequired: true, component: HomePage },
  {
    path: PagePath.REGISTER,
    exact: true,
    authRequired: false,
    component: RegisterPage,
  },
  {
    path: PagePath.LOGIN,
    exact: true,
    authRequired: false,
    component: LoginPage,
  },
  {
    path: PagePath.CHANGE_PASSWORD,
    exact: true,
    authRequired: true,
    component: ChangePasswordPage,
  },
  {
    path: PagePath.UPDATE_USER,
    exact: true,
    authRequired: true,
    component: UpdateProfilePage,
  },
];

const renderComponent = (Component, authRequired, isAuthenticated, props) => {
  if (!isAuthenticated && authRequired) {
    return <LoginPage />;
  } else if (isAuthenticated && !authService.getUser().verified) {
    return <ChangePasswordPage />;
  } else {
    return (
      <>
        <NavBar position="fixed" />
        <Component {...props} />
      </>
    );
  }
};

const Routes = ({ isAuthenticated }) => {
  return (
    <Switch>
      {routes.map((route) => {
        const { exact, path, component, authRequired, additionalProps } = route;
        return (
          <Route
            key={path}
            exact={exact}
            path={path}
            render={(routerProps) =>
              renderComponent(component, authRequired, isAuthenticated, {
                ...routerProps,
                ...additionalProps,
              })
            }
          />
        );
      })}
      <Route component={NoMatch} />
    </Switch>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
