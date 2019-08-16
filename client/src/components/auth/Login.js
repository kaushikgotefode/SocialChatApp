import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classnames from 'classnames';
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
      errors[field] = '';
      this.setState({
        errors
      })
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('/apis/users/login', user).then(res => console.log(res)).catch(err => this.setState({ errors: err.response.data }))
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="signup-form">
        <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
          <div className="col-xs-8 col-xs-offset-4">
            <h2>Login</h2>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Email Address</label>
            <div className="col-xs-8">
              <input
                type="email"
                className={classnames('form-control', { 'is-invalid': errors.email })}
                name="email"
                value={this.state.email}
                onChange={e => this.onChange(e)}
                onFocus={e => this.onFocus(e)}
              />
              {
                errors.email && (<div className="invalid-feedback">{errors.email}</div>)
              }
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Password</label>
            <div className="col-xs-8">
              <input
                type="password"
                className={classnames('form-control', { 'is-invalid': errors.password })}
                name="password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
                onFocus={e => this.onFocus(e)}
              />
              {
                errors.password && (<div className="invalid-feedback">{errors.password}</div>)
              }
            </div>
          </div>
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

export default Login;
