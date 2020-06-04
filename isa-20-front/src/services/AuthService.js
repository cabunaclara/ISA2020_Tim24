import BaseService from './BaseService';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  RESET_PASSWORD: '/reset-password-request',
};

class AuthService extends BaseService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.getToken();
    const user = this.getUser();

    if (token && user) {
      await this.setAuthorizationHeader();

      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  createSession = async (user) => {
    try {
      localStorage.setItem('user', JSON.stringify(user));

      await this.setAuthorizationHeader();
    } catch (error) {
      console.log(error);
    }
  };

  destroySession = () => {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.log(error);
    }

    this.api.removeHeaders(['Authorization']);
  };

  login = async (loginData) => {
    try {
      const { data } = await this.apiClient().post(ENDPOINTS.LOGIN, loginData);
      await this.createSession(data);
      return { ok: true, data };
    } catch (e) {
      console.log(e);
      return { ok: false, error: e };
    }
  };

  logout = async () => {
    await this.destroySession();
  };

  signup = async (signUpData) => {
    let formData = new FormData();
    if (signUpData.picture) {
      let localUri = signUpData.picture.uri;
      let filename = localUri.split('/').pop();
      let type = 'image/jpeg';
      formData.append('image', { uri: localUri, name: filename, type });
    }
    formData.append('name', signUpData.name);
    formData.append('email', signUpData.email);
    formData.append('password', signUpData.password);
    formData.append('birthday', signUpData.birthday);
    formData.append('gender', signUpData.gender.toLowerCase());
    try {
      const { data } = await this.apiClient().post(ENDPOINTS.SIGN_UP, formData);
      await this.createSession(data);
      return { ok: true, data };
    } catch (e) {
      return { ok: false, error: e };
    }
  };

  getToken = () => {
    try {
      const user = localStorage.getItem('user');
      if (user) {
        return JSON.parse(user).token.access_token;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getUser = () => {
    try {
      const user = localStorage.getItem('user');
      return JSON.parse(user);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  updateUserInStorage = (property) => {
    try {
      const user = localStorage.getItem('user');
      let jsonUser = JSON.parse(user);
      jsonUser = { ...jsonUser, ...property };
      localStorage.setItem('user', JSON.stringify(jsonUser));
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}

const authService = new AuthService();
export default authService;
