import { saveState } from '../store/localStorage';

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

export const logout = () => 
{
  localStorage.clear();
  return {
    type: 'LOGOUT'
  }
}
