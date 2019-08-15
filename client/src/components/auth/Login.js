import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);
  }
  render() {
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
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={e => this.onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-xs-4">Password</label>
            <div className="col-xs-8">
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
              />
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
