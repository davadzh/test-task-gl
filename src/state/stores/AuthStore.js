import { Store } from "../common/store/store";
import { Registry } from "../common/store/registry";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const AuthStore = new Store("auth", {
  data: {
    login: '',
    password: ''
  },
  options: {
    shouldInitFromState: true,
    stateKey: "auth",
  },
  reducers: [
    {
      type: LOGIN,
      action(state, payload) {
        return {
          ...state,
          login: payload.login,
          password: payload.password
        };
      },
    },
    {
      type: LOGOUT,
      action(state) {
        return {
          ...state,
          login: '',
          password: ''
        };
      },
    },
  ],
});

Registry.addStore(AuthStore);
export { AuthStore };