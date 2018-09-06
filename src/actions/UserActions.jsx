import * as api from "../Api";
import { LOGIN_OK, LOGIN_FAIL } from "../Constants";

// An action creator
export function loginUser(username, password) {
  console.log("loginUser:", username, password);

  if (!username || !password) return;
  // Returns an action warpped in a function
  return dispatch => {
    api
      .login(username, password)

      .then(response => {
        console.log(response);
        if (response.status === 200) {
          dispatch({
            type: LOGIN_OK,
            user: JSON.stringify(response.data.data)
          });
        } else {
          // need to add response status code..
          dispatch({ type: LOGIN_FAIL, user: JSON.stringify(response.data) });
        }
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_FAIL",
          payload:
            "Error occurred during login.  Please contact System Administrator."
        });
      });
  };
}
