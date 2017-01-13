import {REGISTER} from './const';

export default function register(username, password) {
  return {type: REGISTER, value: {username, password}};
}
