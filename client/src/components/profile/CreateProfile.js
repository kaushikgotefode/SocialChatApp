import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "./../common/TextFieldGroup";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";
import SelectListGroup from "./../common/SelectListGroup";
import { createProfile } from "./../../actions/profileActions";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      value: "",
      skills: "",
      bio: "",
      gitHubUserName: "",
      youtube: "",
      facebook: "",
      twitter: "",
      linkedIn: "",
      instagram: "",
      errors: {},
      statusOptions: [
        { label: "Software Engineer", value: "Software Engineer" },
        {
          label: "Senior Software Engineer",
          value: "Senior Software Engineer"
        },
        { label: "Team Lead", value: "Team Lead" },
        { label: "Project Manager", value: "Project Manager" }
      ]
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const profile = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      skills: this.state.skills,
      status: this.state.status,
      bio: this.state.bio,
      gitHubUserName: this.state.gitHubUserName,
      social: {
        youtube: this.state.youtube,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
        instagram: this.state.instagram,
        linkedIn: this.state.linkedIn
      }
    };
    this.props.createProfile(profile, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile">
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
                  value={this.state.handle}
                  onChange={e => this.onChange(e)}
                />
                <SelectListGroup
                  name="status"
                  info="Select the status"
                  isRequired="true"
                  error={errors.status}
                  value={this.state.status}
                  options={this.state.statusOptions}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="company"
                  placeholder="Company"
                  info="Could be your own company or you work for"
                  value={this.state.company}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="website"
                  placeholder="Website"
                  info="Could be your website or company website"
                  value={this.state.website}
                  error={errors.website}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="location"
                  placeholder="Location"
                  info="City, state suggested (ex. Bangalore,Karnataka)"
                  value={this.state.location}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="skills"
                  placeholder="* Skills"
                  info="Please add comma separated values (ex. javascript, react, java)"
                  value={this.state.skills}
                  error={errors.skills}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="githubUsername"
                  placeholder="Github Username"
                  info="If you want your latest github repos and a github links, please add github username"
                  value={this.state.gitHubUserName}
                  onChange={e => this.onChange(e)}
                />
                <TextAreaFieldGroup
                  name="bio"
                  placeholder="A short bio of yourself"
                  info="Tell us a little about yourself"
                  value={this.state.bio}
                  onChange={e => this.onChange(e)}
                />
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(CreateProfile);
