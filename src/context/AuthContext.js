import { createContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import AuthReducer from './AuthReducer'
const INITIAL_STATE = {
  user: JSON.parse(sessionStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
}
export const AuthContext = createContext(INITIAL_STATE)

AuthContextProvider.propTypes = {
  /** Text to show on header */
  children: PropTypes.object.isRequired,
}

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
