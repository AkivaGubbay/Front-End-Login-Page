import _ from "lodash";
import thunk from "redux-thunk";
import { createStore, /* combineReducers, */ applyMiddleware } from "redux";
import { LOGIN_FAIL, LOGIN_OK } from "./Constants";

const initialUser = {
  user: null
  // waiting_for_server: false,
  // alerts: []
};

const loginReducer = (state = initialUser, action) => {
  console.log("reducer has been called.");
  console.log("with state:", state);
  console.log("with action:", action);
  switch (action.type) {
    case LOGIN_OK:
      console.log(
        "In reducer, LOGIN_OK, action.payload.userName: ",
        action.payload.userName
      );
      var newState = _.assign({}, state, {
        login: action.payload.userName
      });
      return newState;

    case LOGIN_FAIL:
      console.log("reducer - LOGIN_FAIL");
      console.log("action object: ", action);
      break;

    default:
      return state;
  }
};

// Creates the  store and attaches the reducers
export default createStore(
  loginReducer,
  { user: null },
  applyMiddleware(thunk)
);
