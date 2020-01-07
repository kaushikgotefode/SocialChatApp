import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  likePost,
  unlikePost,
  commentPost,
  deleteComment,
  viewPost
} from "./../../actions/postActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

class PostItem extends Component {
  likePost(id) {
    this.props.likePost(id);
  }
  unlikePost(id) {
    this.props.unlikePost(id);
  }
  viewPost(post) {
    this.props.history.push("/view-post");
    // console.log("view-post");
    // this.viewPost(post, this.props.history);
  }
  deleteComment(id) {
    this.props.deleteComment(id);
  }
  render() {
    const post = this.props.post;
    const { user } = this.props.auth;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-12 pb-2">
            <Link to={`profile/${post.handle}`}>
              <img
                style={{ width: "40px" }}
                className="rounded-circle d-inline-block"
                src={post.avatar}
                alt={post.name}
              />
            </Link>
            <div className="d-inline-block pl-3">{post.name}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <pre className="lead">{post.text}</pre>
            <button
              type="button"
              className="btn btn-light mr-1"
              onClick={() => {
                this.likePost(post._id);
              }}
            >
              <FontAwesomeIcon
                className="text-info fas fa-thumbs-up"
                icon={faThumbsUp}
              />
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button
              type="button"
              className="btn btn-light mr-1"
              disabled={post.user !== user._id}
              onClick={() => {
                this.unlikePost(post._id);
              }}
            >
              <FontAwesomeIcon
                className="text-secondary fas fa-thumbs-down"
                icon={faThumbsDown}
              />
            </button>
            <button
              className="btn btn-info mr-1"
              onClick={() => {
                this.viewPost(post);
              }}
            >
              <FontAwesomeIcon icon={faComment}>Comments</FontAwesomeIcon>
            </button>
            {post.user === user._id ? (
              <button
                type="button"
                className="btn btn-danger mr-1"
                onClick={() => {
                  this.deleteComment(post._id);
                }}
              >
                <FontAwesomeIcon className="fas fa-times" icon={faTimes} />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
PostItem.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { likePost, unlikePost, commentPost, deleteComment, viewPost }
)(withRouter(PostItem));
