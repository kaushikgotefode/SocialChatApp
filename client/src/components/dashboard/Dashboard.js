import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "./../../actions/profileActions";
import { PropTypes } from "prop-types";
import Spinner from "../common/Spinner";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent = "";
    if (loading) {
      dashboardContent = <Spinner />;
    } else {
      if (profile && Object.keys(profile).length > 0) {
        dashboardContent = <div className="container">
          <Link className="btn btn-secondary" to="/profiles">List of Developers</Link>
          <center>
            <img src={user.avatar} alt={user.name} name="aboutme" style={{width:'140px',height:'140px',border:'0px', borderRadius:'50%'}} />
            <h3 className="media-heading">{user.name} <small>{profile.location}</small></h3>
            <span><strong className="mr-2">Skills: </strong></span>
            {
              profile.skills.map((skill,id) => {
                return <span className="badge badge-info px-1 mr-2" key={id}>{skill}</span>
              })
            }
          </center>
          <hr />
          <center>
            <p className="text-left"><strong>Bio: </strong><br />
              {profile.bio}
            </p>
            <br />
          </center>
        </div>
      } else {
        dashboardContent = (
          <div className="container">
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
    return <div>{dashboardContent}</div>;
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
  { getCurrentProfile }
)(Dashboard);
