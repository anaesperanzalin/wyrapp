import {SET_AUTHED_USER} from "../Actions/authedUser"

export default function authedUser(state=null, action ){

  switch (action.type) {
    case SET_AUTHED_USER:
      return action
      default:
        return state
  };
};