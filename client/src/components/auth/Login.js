import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFocus(e) {
    const field = e.target.name;
    const { errors } = this.state;
    if (Object.keys(this.state.errors).length > 0) {
      errors[field] = "";
      this.setState({
        errors
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="signup-form">
        <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
          <div className="col-xs-8 col-xs-offset-4">
            <h2>Login</h2>
          </div>
          <TextFieldGroup
            name="email"
            type="email"
            placeholder="Email Address"
            error={errors.email}
            value={this.state.email}
            onChange={e => this.onChange(e)}
            onFocus={e => this.onFocus(e)}
          />
          <TextFieldGroup
            name="password"
            type="password"
            placeholder="Password"
            error={errors.password}
            value={this.state.password}
            onChange={e => this.onChange(e)}
            onFocus={e => this.onFocus(e)}
          />
          <div className="form-group">
            <div className="col-xs-8 col-xs-offset-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Log In
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
