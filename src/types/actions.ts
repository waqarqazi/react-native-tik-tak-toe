export interface LoginAction {
  type: 'LOGIN'
  payload: { username: string; password: string }
}

export interface LogoutAction {
  type: 'LOGOUT'
}

export type AuthActionTypes = LoginAction | LogoutAction
