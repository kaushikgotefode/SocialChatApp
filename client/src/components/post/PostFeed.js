import React, { Component } from "react";
import PostItem from "./PostItem";
import PropType from "prop-types";
class PostFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { posts } = this.props;
    return posts.map(post => <PostItem key={post._id} post={post} />);
  }
}
PostFeed.propTypes = {
  posts: PropType.array.isRequired
};

export default PostFeed;
