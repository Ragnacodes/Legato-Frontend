export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return login(5);
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return logout();
};
