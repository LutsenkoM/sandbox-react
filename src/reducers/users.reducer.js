import { userConstants } from '../constants'

let initUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const users = (state = initUser, action) => {

  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {}

    case userConstants.LOGIN_REQUEST:
      return action.payload

    default:
      return state;
  }

}

export {
  users
};
