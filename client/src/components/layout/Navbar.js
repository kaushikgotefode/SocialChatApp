import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import "./../../App.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "./../../actions/authActions";
import { clearCurrentProfile } from "./../../actions/profileActions";
class Navbar extends Component {
  onLogoutClick() {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    // window.location.href = "/login";
  }

  render() {
    const { isAuthenticate, user } = this.props.auth;
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            {" "}
            Developers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/profiles">
            Developers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={this.onLogoutClick.bind(this)}>
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </span>
        </li>
      </ul>
    );
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          style={{ minHeight: "56px" }}
        >
          <div className="" style={{ flex: "auto" }}>
            <Link className="navbar-brand" to="/">
              DevConnector
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
              style={{ float: "right" }}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse">
            {/* <ul className="navbar-nav mr-auto">
              
            </ul> */}
            {isAuthenticate ? authLinks : guestLinks}
          </div>
        </nav>
        <div className="collapse navbar-collapse mobile-view" id="mobile-nav">
          {isAuthenticate ? authLinks : guestLinks}
        </div>
      </Fragment>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(withRouter(Navbar));
