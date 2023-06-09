import { makeAutoObservable, reaction } from 'mobx';
import { InstanceLogin } from '../../http/Agent/Login.agent';
import { InstanceUser } from '../../http/Agent/User.agent';
import { InstancePhoto } from '../../http/Agent/Photo.agent';

class AuthStatus {
  _statusAuth = false;
  constructor() {
    makeAutoObservable(this, {});
    reaction(
      () => this._statusAuth,
      () => this.checkAuth(),
    );
  }

  userInfo: any = null;
  avatar: any = null;
  get statusAuth() {
    return this._statusAuth;
  }
  set statusAuth(value) {
    this._statusAuth = value;
  }
  checkAuth = async () => {
    try {
      const userMe = await InstanceLogin.getInfoMe();
      const data = await InstanceUser.getUserById(userMe.uid);
      console.log(data);
      this.userInfo = data;
      this.statusAuth = true;
      this.getLogo();
    } catch {
      this.statusAuth = false;
    }
  };
  logout = () => {
    try {
      this.statusAuth = false;
      this.userInfo = null;
      localStorage.removeItem('token');
    } catch (err) {}
  };

  getLogo = async () => {
    try {
      const data = await InstancePhoto.getPhoto(this.userInfo.avatar);

      this.avatar = data;
    } catch {}
  };
}

export const StoreAuthStatus = new AuthStatus();
