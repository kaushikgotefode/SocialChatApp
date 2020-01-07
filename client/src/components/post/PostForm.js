import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "./../../actions/postActions";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;
    const post = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    this.props.addPost(post);
  }
  render() {
    const { errors } = this.state;
    return (
      <form className="form-horizontal" onSubmit={e => this.onSubmit(e)}>
        <div className="form-group">
          <TextAreaFieldGroup
            placeholder="Create a Post"
            name="text"
            value={this.state.text}
            error={errors.text}
            onChange={e => this.onChange(e)}
          />
          <input type="submit" className="btn btn-info" value="Post" />
        </div>
      </form>
    );
  }
}

PostForm.propType = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
