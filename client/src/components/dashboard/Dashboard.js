import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  getCurrentProfile,
  deleteProfile
} from "./../../actions/profileActions";
import { PropTypes } from "prop-types";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experience from "./Experience";
import Education from "./Education";
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
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
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
