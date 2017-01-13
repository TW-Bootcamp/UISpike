import {REGISTER} from './const';

export function register(username, password) {
  return {type: REGISTER, value: {username, password}};
}
