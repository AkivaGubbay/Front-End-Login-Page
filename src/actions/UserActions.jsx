import * as api from "../Api";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from "../Constants";

// An action creator
export function loginUser(email, password) {
  console.log("loginUser:", email, password);

  // Returns an action warpped in a function
  return dispatch => {
    if (!email || !password) return; // First call from createstore
    console.log("sending login_request login action ...");
    dispatch(requestLogin(email, password));
    api
      .login(email, password)

      .then(response => {
        console.log("The whole response object:", response);
        const fetchedUser = response.data.data;
        const fetchedErrorMsg = response.data.error;
        const fetchedToken = response.data.token;

        console.log("the DATA in the response:", fetchedUser);
        console.log("the ERROR in the response:", fetchedErrorMsg);
        console.log("the TOKEN in the response:", fetchedToken);

        if (response.status === 200) {
          // Save the login token
          localStorage.setItem("token", fetchedToken);
          console.log(
            "-------------------\nok: \n",
            localStorage.getItem("token"),
            "\n---------------------------\n"
          );
          console.log("sending login_success login action ...");
          dispatch(receiveLogin(fetchedUser));
        } else {
          console.log("sending login_faliure login action ...");
          dispatch(loginError(fetchedErrorMsg));
        }
      })
      .catch(err => {
        console.log("error from promise within loginUser action creator", err);
        console.log("sending login_faliure (promise error) login action ...");
        dispatch(
          loginError(
            "Error occurred during login.  Please contact System Administrator."
          )
        );
      });
  };
}

function requestLogin(userName, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      user: {
        userName: userName,
        userPassword: password
      }
    }
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
}

function loginError(errorMsg) {
  return {
    type: LOGIN_FAILURE,
    payload: errorMsg
  };
}
