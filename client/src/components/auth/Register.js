import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="signup-form">
        <form
          noValidate
          className="form-horizontal"
          onSubmit={e => this.onSubmit(e)}
        >
          <div className="col-xs-8 col-xs-offset-4">
            <h2>Sign Up</h2>
          </div>
          <TextFieldGroup
            name="name"
            placeholder="Name"
            error={errors.name}
            value={this.state.name}
            onChange={e => this.onChange(e)}
            onFocus={e => this.onFocus(e)}
          />
          <TextFieldGroup
            name="email"
            type="email"
            placeholder="Email address"
            error={errors.email}
            value={this.state.email}
            info="This site used Gravatar, so for profile image use Gravatar email."
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
          <TextFieldGroup
            name="password2"
            type="password"
            placeholder="Confirm password"
            error={errors.password2}
            value={this.state.password2}
            onChange={e => this.onChange(e)}
            onFocus={e => this.onFocus(e)}
          />
          <div className="form-group">
            <div className="col-xs-8 col-xs-offset-4">
              <p>
                <label className="checkbox-inline">
                  <input type="checkbox" /> I accept the{" "}
                  <Link to="/">Terms of Use</Link> &amp;{" "}
                  <Link to="/">Privacy Policy</Link>.
                </label>
              </p>
              <button type="submit" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
