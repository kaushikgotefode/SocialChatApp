import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  getCurrentProfile,
  deleteProfile
} from "./../../actions/profileActions";
import { PropTypes } from "prop-types";
import Spinner from "../common/Spinner";
import isEmpty from "./../../validations/isEmpty";
import ProfileActions from "./ProfileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-brands-svg-icons";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDelete(e) {
    this.props.deleteProfile(this.props.history);
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const skills = !isEmpty(profile)
      ? profile.skills && typeof profile.skills === "object"
        ? profile.skills
        : profile.skills.split(",")
      : [];
    let dashboardContent = "";
    if (loading) {
      dashboardContent = <Spinner />;
    } else {
      if (profile && Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            <center>
              <img
                src={user.avatar}
                alt={user.name}
                name="aboutme"
                style={{
                  width: "140px",
                  height: "140px",
                  border: "0px",
                  borderRadius: "50%"
                }}
              />
              <h3 className="media-heading">
                {user.name} <small>{profile.location}</small>
              </h3>
              <span>
                <strong className="mr-2">Skills: </strong>
              </span>
              {skills.map((skill, id) => {
                return (
                  <span
                    className="text-capitalize badge badge-info px-1 mr-2"
                    key={id}
                  >
                    {skill}
                  </span>
                );
              })}
            </center>
            <hr />
            <center>
              <p className="text-left">
                <strong>Bio: </strong>
                <br />
                {profile.bio}
              </p>
              <br />
            </center>
            <div style={{ marginBottom: "60px" }}>
              <button
                className="btn btn-danger"
                onClick={e => this.onDelete(e)}
              >
                <FontAwesomeIcon className="mr-1" /> Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p className="text-muted">
              You have not setup profile, please add some info.
            </p>
            <Link className="btn btn-info" to="create-profile">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return <div className="container py-4">{dashboardContent}</div>;
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteProfile }
)(withRouter(Dashboard));
