import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment, commentPost } from "./../../actions/postActions";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";

class ViewPost extends Component {
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
  onSubmit(e, post) {
    e.preventDefault();
    const { user } = this.props.auth;
    const comment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };
    this.props.commentPost(post._id, comment);
  }
  render() {
    const { errors } = this.state;
    const { post } = this.props.post;
    return (
      <div className="post pt-5 b-1">
        <div className="container">
          <div className="card card-body mb-3">
            <div className="row">
              <div className="col-12 pb-2">
                <Link to="">
                  <img
                    style={{ width: "40px" }}
                    className="rounded-circle d-inline-block"
                    src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                    alt=""
                  />
                </Link>
                <div className="d-inline-block pl-3">Kaushik</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  possimus corporis sunt necessitatibus! Minus nesciunt soluta
                  suscipit nobis. Amet accusamus distinctio cupiditate
                  blanditiis dolor? Illo perferendis eveniet cum cupiditate
                  aliquam?
                </p>
              </div>
            </div>
          </div>
          <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header bg-info text-white">
                Say Somthing...
              </div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(e, post)}>
                  <div className="form-group">
                    <TextAreaFieldGroup
                      placeholder="Add a Comment"
                      name="text"
                      value={this.state.text}
                      error={errors.text}
                      onChange={e => this.onChange(e)}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="comments">
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <Link to="">
                    <img
                      className="rounded-circle d-none d-md-block"
                      src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                      alt=""
                    />
                  </Link>
                  <br />
                  <p className="text-center">Kevin Smith</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint possimus corporis sunt necessitatibus! Minus nesciunt
                    soluta suscipit nobis.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <Link to="">
                    <img
                      className="rounded-circle d-none d-md-block"
                      src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                      alt=""
                    />
                  </Link>
                  <br />
                  <p className="text-center">Karen Johnson</p>
                </div>
                <div className="col-md-10">
                  <p className="lead">
                    {" "}
                    Amet accusamus distinctio cupiditate blanditiis dolor? Illo
                    perferendis eveniet cum cupiditate aliquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ViewPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { deleteComment, commentPost }
)(ViewPost);
