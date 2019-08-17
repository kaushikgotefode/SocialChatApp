import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./../../App.css";

import { logoutUser } from "./../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Navbar extends Component {
  onLogoutClick() {
    this.props.logoutUser(this.props.history);
  }
  render() {
    const { isAuthenticate, user } = this.props.auth;
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
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
          <a
            className="nav-link"
            href="javascript:void(0)"
            onClick={this.onLogoutClick.bind(this)}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticate ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
