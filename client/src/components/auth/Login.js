import React, { Component } from "react";
import { Link } from 'react-router-dom';
export class Login extends Component {
  render() {
    return (<div className="signup-form">
      <form className="form-horizontal">
        <div className="col-xs-8 col-xs-offset-4">
          <h2>Login</h2>
        </div>
        <div className="form-group">
          <label className="control-label col-xs-4">Email Address</label>
          <div className="col-xs-8">
            <input type="email" className="form-control" name="email" required="required" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-xs-4">Password</label>
          <div className="col-xs-8">
            <input type="password" className="form-control" name="password" required="required" />
          </div>
        </div>
      </form>
      <div className="text-center">Don't have an account? <Link to="/register">Register here</Link></div>
    </div>);
  }
}

export default Login;
