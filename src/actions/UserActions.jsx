import * as api from "../Api";
import { LOGIN_OK, LOGIN_FAIL } from "../Constants";

// An action creator
export function loginUser(email, password) {
  console.log("loginUser:", email, password);

  // Returns an action warpped in a function
  return dispatch => {
    if (!email || !password) return; // First call from createstore

    api
      .login(email, password)

      .then(response => {
        console.log("The whole response object:", response);
        console.log("the data in the response:", response.data.data);
        if (response.status === 200) {
          dispatch({
            type: LOGIN_OK,
            payload: response.data.data
          });
        } else {
          // need to add response status code..
          dispatch({ type: LOGIN_FAIL, user: response.data });
        }
      })
      .catch(err => {
        console.log("error from promise within loginUser action creator", err);
        dispatch({
          type: "LOGIN_FAIL",
          payload:
            "Error occurred during login.  Please contact System Administrator."
        });
      });
  };
}
