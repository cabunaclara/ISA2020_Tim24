import React from 'react';
import { Router } from 'react-router';
import Routes from './components/Routes/Routes';
import history from './store/history';
import authService from './services/AuthService';

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Routes isAuthenticated={!!authService.getToken()} />
      </div>
    </Router>
  );
};

export default App;
