import React, { Component } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import { loginUser } from "./actions/UserActions";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  // Component life cycle functions

  /* componentWillMount() */

  /* componentWillReceiveProps */

  shouldComponentUpdate(newProps, newState) {
    return (
      JSON.stringify(this.props) !== JSON.stringify(newProps) ||
      JSON.stringify(this.state) !== JSON.stringify(newState)
    );
  }

  // Form handlers
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  validateForm() {
    return (
      this.state.email &&
      this.state.password &&
      this.state.email.length > 5 &&
      this.state.password.length > 4
    ); //put lengths in constant class
  }

  onLoginButtonClick = event => {
    console.log("you've clicked the right button!");
    this.props.loginUser(this.state.email, this.state.password);
    event.preventDefault();
  };

  render() {
    return (
      <div className="login-page">
        <form onSubmit={this.onLoginButtonClick}>
          <div>
            <h2>Login</h2>
          </div>
          <div className="login-line">
            <div>Email</div>
            <div>
              <input
                type="email"
                className="login-text"
                onChange={this.onEmailChange}
                value={this.state.email}
              />
            </div>
          </div>
          <div className="login-line">
            <div>Password</div>
            <div>
              <input
                type="password"
                className="login-text"
                onChange={this.onPasswordChange}
                value={this.state.password}
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Button
              type="submit"
              bsStyle="primary"
              style={{ width: "225px", height: "45px" }}
              disabled={!this.validateForm}
            >
              Login
            </Button>
          </div>
          <div>
            {/* <Link className="forgot-password" to="/resetpassword">
              Forgot password
            </Link> */}
          </div>
          {/* <div style={{ marginTop: "20px" }}>{alert_element}</div> */}
        </form>
      </div>
    );
  }
}

// For connecting the component props to redux actions
const mapDispatchToProps = {
  loginUser
};

const mapStateToProps = state => {
  //console.log("state.user: ", state.user);
  var myProps = _.assign({}, { user: state.user });
  //console.log("myProps: ", myProps);
  return myProps;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
