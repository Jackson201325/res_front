import { userConstants } from '../constants/user';

export function registration(state = {}, action) {
  console.log(action)
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}