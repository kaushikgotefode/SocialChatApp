import React, { Component } from "react";
import TextFieldGroup from "./../common/TextFieldGroup";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEducation } from "./../../actions/profileActions";

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldOfStudy: "",
      from: "",
      to: "",
      description: "",
      current: false,
      disabled: false,
      errors: {}
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // if (nextProps.profile) {
    //   this.setState({ profile: nextProps.profile });
    // }
  }
  onSubmit(e) {
    e.preventDefault();

    const education = {
      school: this.state.school,
      degree: this.state.degree,
      fieldOfStudy: this.state.fieldOfStudy,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description,
      current: this.state.current
    };
    this.props.addEducation(education, this.props.history);
  }
  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile py-4">
        <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
          <div className="container">
            <div className="row">
              <div className="md-col-8 m-auto">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <h2 className="display-4 text-center">Add education</h2>
                <p className="lead text-center">
                  Add any schooling/degree that you have had in the past
                </p>

                <TextFieldGroup
                  name="school"
                  placeholder="* School"
                  isRequired="true"
                  error={errors.school}
                  value={this.state.school}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="fieldOfStudy"
                  placeholder="* Field of Study"
                  isRequired="true"
                  error={errors.fieldOfStudy}
                  value={this.state.fieldOfStudy}
                  onChange={e => this.onChange(e)}
                />
                <TextFieldGroup
                  name="degree"
                  placeholder="* Degree"
                  isRequired="true"
                  error={errors.degree}
                  value={this.state.degree}
                  onChange={e => this.onChange(e)}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  name="from"
                  type="date"
                  placeholder="From date"
                  isRequired="true"
                  error={errors.from}
                  value={this.state.from}
                  onChange={e => this.onChange(e)}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  name="to"
                  type="date"
                  placeholder="To date"
                  isRequired="true"
                  error={errors.to}
                  value={this.state.to}
                  disabled={this.state.disabled}
                  onChange={e => this.onChange(e)}
                />
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    id="current"
                    value={this.state.current}
                    onChange={e => this.onCheck(e)}
                  />
                  <label className="form-check-label" htmlFor="current">
                    Current School
                  </label>
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={e => this.onChange(e)}
                  />
                </div>
                <input type="submit" className="btn btn-info mt-4" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
