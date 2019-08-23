import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "./../common/TextFieldGroup";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";
import SelectListGroup from "./../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "./../../actions/profileActions";
import InputGroup from "../common/InputGroup";
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedin,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editProfile: {
                handle: "",
                company: "",
                website: "",
                location: "",
                value: "",
                skills: "",
                bio: "",
                gitHubUserName: "",
                social: {
                    youtube: "",
                    facebook: "",
                    twitter: "",
                    linkedIn: "",
                    instagram: "",
                },
            },
            statusOptions: [
                { label: "Software Engineer", value: "Software Engineer" },
                {
                    label: "Senior Software Engineer",
                    value: "Senior Software Engineer"
                },
                { label: "Team Lead", value: "Team Lead" },
                { label: "Project Manager", value: "Project Manager" }
            ],
            errors: {},
            displaySocialInputs: false,

        };
    }
    componentDidMount() {
        if (window.location.pathname === '/edit-profile') {
            this.props.getCurrentProfile();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        if (nextProps.profile.profile) {
            this.setState({ editProfile: nextProps.profile.profile });
        }

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.profile.profile) {
            const profile = nextProps.profile.profile;
            if (typeof profile.skills === 'object'){
                profile.skills = profile.skills.join();
            }
            return true;
        }
        return false;
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const profile = {
            handle: this.state.editProfile.handle,
            company: this.state.editProfile.company,
            website: this.state.editProfile.website,
            location: this.state.editProfile.location,
            skills: this.state.editProfile.skills,
            status: this.state.editProfile.status,
            bio: this.state.editProfile.bio,
            gitHubUserName: this.state.editProfile.gitHubUserName,
            social: this.state.editProfile.social,
            // social: {
            //   youtube: this.state.youtube,
            //   facebook: this.state.facebook,
            //   twitter: this.state.twitter,
            //   instagram: this.state.instagram,
            //   linkedIn: this.state.linkedIn
            // }
        };
        this.props.createProfile(profile, this.props.history);
    }
    expandSocialLinks(e) {
        e.preventDefault();
        this.setState({ displaySocialInputs: !this.state.displaySocialInputs });
    }
    render() {
        const { errors } = this.state;
        const socialInputs = (
            <Fragment>
                <InputGroup
                    name="facebook"
                    placeholder="Facebook"
                    value={this.state.editProfile.social.facebook}
                    icon={faFacebookF}
                    onChange={e => this.onChange(e)}
                />
                <InputGroup
                    name="instagram"
                    placeholder="Instagram"
                    value={this.state.editProfile.social.instagram}
                    icon={faInstagram}
                    onChange={e => this.onChange(e)}
                />
                <InputGroup
                    name="youtube"
                    placeholder="Youtube"
                    value={this.state.editProfile.social.youtube}
                    icon={faYoutube}
                    onChange={e => this.onChange(e)}
                />
                <InputGroup
                    name="twitter"
                    placeholder="Twitter"
                    value={this.state.editProfile.social.twitter}
                    icon={faTwitter}
                    onChange={e => this.onChange(e)}
                />
                <InputGroup
                    name="linkedIn"
                    placeholder="linkedIn"
                    value={this.state.editProfile.social.linkedIn}
                    icon={faLinkedin}
                    onChange={e => this.onChange(e)}
                />
            </Fragment>
        );
        return (
            <div className="create-profile py-4">
                <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
                    <div className="container">
                        <div className="row">
                            <div className="md-col-8 m-auto">
                                <h2 className="display-4 text-center">Create your profile</h2>
                                <p className="lead text-center">
                                    Let's add some information to make your profile stand out.
                </p>
                                <TextFieldGroup
                                    name="handle"
                                    placeholder="* Profile Handle"
                                    info="A unique handle for your profile URL, (This CAN'T be change later)"
                                    isRequired="true"
                                    error={errors.handle}
                                    value={this.state.editProfile.handle}
                                    onChange={e => this.onChange(e)}
                                />
                                <SelectListGroup
                                    name="status"
                                    info="Select the status"
                                    isRequired="true"
                                    error={errors.status}
                                    value={this.state.editProfile.status}
                                    options={this.state.statusOptions}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextFieldGroup
                                    name="company"
                                    placeholder="Company"
                                    info="Could be your own company or you work for"
                                    value={this.state.editProfile.company}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextFieldGroup
                                    name="website"
                                    placeholder="Website"
                                    info="Could be your website or company website"
                                    value={this.state.editProfile.website}
                                    error={errors.website}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextFieldGroup
                                    name="location"
                                    placeholder="Location"
                                    info="City, state suggested (ex. Bangalore,Karnataka)"
                                    value={this.state.editProfile.location}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextFieldGroup
                                    name="skills"
                                    placeholder="* Skills"
                                    info="Please add comma separated values (ex. javascript, react, java)"
                                    value={this.state.editProfile.skills}
                                    error={errors.skills}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextFieldGroup
                                    name="gitHubUserName"
                                    placeholder="Github Username"
                                    info="If you want your latest github repos and a github links, please add github username"
                                    value={this.state.editProfile.gitHubUserName}
                                    onChange={e => this.onChange(e)}
                                />
                                <TextAreaFieldGroup
                                    name="bio"
                                    placeholder="A short bio of yourself"
                                    info="Tell us a little about yourself"
                                    value={this.state.editProfile.bio}
                                    onChange={e => this.onChange(e)}
                                />
                                <div className="form-group">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={e => this.expandSocialLinks(e)}
                                    >
                                        Social Links
                  </button>
                                </div>
                                {this.state.displaySocialInputs ? socialInputs : ""}

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">
                                        Create Profile
                  </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

EditProfile.propTypes = {
    EditProfile: PropTypes.func,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createProfile, getCurrentProfile }
)(EditProfile);
