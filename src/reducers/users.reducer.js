import { userConstants } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {}

    case userConstants.LOGIN_REQUEST:
      return action.loginedUser

    case userConstants.LOGOUT_REQUEST:
      return {}

    default:
      return state
  }

}

const readUser = (state = {}, action) => {
  switch (action.type) {
    case userConstants.READ_USERS_PROFILE:
      return action.readUser

    default:
      return state
  }
}

export {
  user,
  readUser
};
