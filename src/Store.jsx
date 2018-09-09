import _ from "lodash";
import thunk from "redux-thunk";
import { createStore, /* combineReducers, */ applyMiddleware } from "redux";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./Constants";

const initialState = {
  user: null,
  isFetching: false,
  isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
  //console.log("reducer has been called.");
  //console.log("with state:", state);
  //console.log("with action:", action);
  let newState;
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("In reducer, LOGIN_REQUEST");

      newState = _.assign({}, state, {
        user: action.payload,
        isFetching: true,
        isAuthenticated: false
      });
      return newState;

    case LOGIN_SUCCESS:
      console.log("In reducer, LOGIN_SUCCESS");

      newState = _.assign({}, state, {
        user: action.payload,
        isAuthenticated: true
      });
      return newState;

    case LOGIN_FAILURE:
      console.log("In reducer, LOGIN_FAILURE");
      newState = _.assign({}, state, {
        errorMsg: action.payload,
        isAuthenticated: false
      });
      return newState;

    default:
      console.log("In reducer, default case ...");
      return state;
  }
};

// Creates the  store and attaches the reducers
export default createStore(
  loginReducer,
  { user: null },
  applyMiddleware(thunk)
);
