import {REGISTER} from './actions'

function register(state = null, action) {
  switch (action.type) {
    case REGISTER:
      console.log("In Store", action);
      return action.value;
    default:
      return state
  }
}
