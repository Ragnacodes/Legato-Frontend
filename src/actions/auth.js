import { loadState, saveState } from '../store/localStorage';

export const login = (uid) => 
{
  saveState({
    auth:{
      uid: uid
    }
  })
  return{
    type: 'LOGIN',
    uid
  }
}

export const startLogin = () => {
  return login(5);
};

export const logout = () => 
{
  localStorage.clear();
  return {
    type: 'LOGOUT'
  }
}

export const startLogout = () => {
  
  return logout();
};
