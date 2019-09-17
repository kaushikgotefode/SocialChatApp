import React, { Component, Fragment } from "react";
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
          <Fragment>
            {profiles.map((profile, id) => {
              return <ProfileItem profile={profile} key={id} />;
            })}
          </Fragment>
        );
      } else {
        profileListContent = (
          <div className="col-md-12">
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
      <div className="content">
        <div className="container profiles pt-5 pb-4">
          <div className="row">{profileListContent}</div>
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
