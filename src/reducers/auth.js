const initialState = {
  isLoggedIn: false,
  currentUser: null
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        isLoggedIn: true,
        currentUser: action.payload
      }
    case 'AUTH_LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
