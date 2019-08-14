import React, { Component } from "react";
import { Link } from 'react-router-dom';
export class Register extends Component {
  render() {
    return (<div className="signup-form">
      <form className="form-horizontal">
        <div className="col-xs-8 col-xs-offset-4">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group">
          <label className="control-label col-xs-4">Name</label>
          <div className="col-xs-8">
            <input type="text" className="form-control" name="name" required="required" />
          </div>
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
        <div className="form-group">
          <label className="control-label col-xs-4">Confirm Password</label>
          <div className="col-xs-8">
            <input type="password" className="form-control" name="confirm_password" required="required" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-8 col-xs-offset-4">
            <p>
              <label className="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the <Link to="/">Terms of Use</Link> &amp; <Link to="/">Privacy Policy</Link>.
              </label>
            </p>
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
          </div>
        </div>
      </form>
      <div className="text-center">Already have an account? <Link to="/login">Login here</Link></div>
    </div>)
  }
}

export default Register;
