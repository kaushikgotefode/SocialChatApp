import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileList } from "./../../actions/profileActions";
import { PropTypes } from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
class Profiles extends Component {
  componentDidMount() {
    this.props.getProfileList();
  }
  render() {
    // const { user } = this.props.auth;
    const { profiles, loading } = this.props.profile;
    let profileListContent = "";
    if (loading) {
      profileListContent = <Spinner />;
    } else {
      if (profiles && profiles.length > 0) {
        profileListContent = (
          <div className="">
            {profiles.map((profile, id) => {
              return <ProfileItem profile={profile} key={id} />;
            })}
          </div>
        );
      } else {
        profileListContent = (
          <div>
            <p className="text-muted">
              There are no Profile created, Create your own Profile.
            </p>
            <Link className="btn btn-info" to="create-profile">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="container py-4">
        <div className="container p-0 profiles">
          <div className="row">
            <div className="col-md-12">{profileListContent}</div>
          </div>
        </div>
      </div>
    );
  }
}
Profiles.propTypes = {
  auth: PropTypes.object.isRequired,
  profiles: PropTypes.array
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfileList }
)(Profiles);
