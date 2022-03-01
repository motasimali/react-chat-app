export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' })
  dispatch({ type: 'LOGIN_SUCCESS', payload: userCredential })
}
export const logoutCall = async (dispatch) => {
  dispatch({ type: 'LOGOUT' })
}
