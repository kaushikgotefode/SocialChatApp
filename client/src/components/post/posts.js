import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReply, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import PostForm from "./PostForm";
import { getAllPost } from "./../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "./../common/Spinner";
import PostFeed from "./PostFeed";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.props.getAllPost();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    if (posts.length && loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div className="feed pt-5 b-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              <div className="posts">{postContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getAllPost }
)(Posts);
