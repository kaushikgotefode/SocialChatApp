import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileList } from "./../../actions/profileActions";
import { PropTypes } from "prop-types";
import Spinner from "../common/Spinner";
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
                profileListContent = <div className="container">
                    List
                </div>
            } else {
                profileListContent = (
                    <div className="container">
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
        return <div>{profileListContent}</div>;
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
