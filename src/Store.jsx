import _ from "lodash";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

const initialUser = {
  user: null
  // waiting_for_server: false,
  // alerts: []
};

/* Put reducer functon here */
const loginReducer = (state = initialUser, action) => {
  switch (action.type) {
    case "LOGIN_OK":
      var newState = _.assign({}, state, {
        //waiting_for_server: false,
        login: action.payload.userName
      });
      return newState;

    case "LOGIN_FAIL":
      console.log("reducer - LOGIN_FAIL");
      console.log("action object: ", action);
      break;

    default:
      return state;
  }
};

// Combine reducers together for creating the store
const rootReducer = combineReducers({
  /* All the Reducer functions */
  loginReducer
});

// To executes actions in async manner
const middleware = applyMiddleware(thunk);

// Creates the  store and attaches the reducers
export const store = createStore(rootReducer, { user: null }, middleware);
