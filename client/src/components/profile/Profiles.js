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
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="well well-sm">
                                {
                                    profiles.map((profile, id) => {
                                        return <div className="row" key={id}>
                                            <div className="col-sm-6 col-md-4">
                                                <img src={profile.avatar} alt={profile.name} className="img-rounded img-responsive" />
                                            </div>
                                            <div className="col-sm-6 col-md-8">
                                                <h4>{profile.handle}</h4>
                                                <small><cite title={profile.location}>{profile.location} <i className="glyphicon glyphicon-map-marker">
                                                </i></cite></small>
                                                <p>
                                                    <i className="glyphicon glyphicon-envelope"></i>{profile.location}
                                                    <br />
                                                    <i className="glyphicon glyphicon-globe"></i><Link to={profile.website}>{profile.website}</Link>
                                                    <br />
                                                </p></div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
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
