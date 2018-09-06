import React, { Component } from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import { loginUser } from "./actions/UserActions";
import { bindActionCreators } from "redux";
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
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser
    },
    dispatch
  );
};

const mapStateToProps = state => {
  var myProps = _.assign({}, { user: state.user });
  return myProps;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
