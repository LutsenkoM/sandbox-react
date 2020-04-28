import { userConstants } from '../constants'

let initUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  readUser: {}
}

const users = (state = initUser, action) => {

  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {}

    case userConstants.LOGIN_REQUEST:
      return action.loginedUser

    case userConstants.READ_USERS_PROFILE:
      return action.readUser

    default:
      return state
  }

}

export {
  users
};
