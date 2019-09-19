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
      <div className="feed">
        <PostForm />
        {postContent}
      </div>
      // <div class="container">
      //   <div class="card">
      //     <div class="card-body">
      //       <div class="row">
      //         <div class="col-md-2">
      //           <img
      //             alt=""
      //             src="https://image.ibb.co/jw55Ex/def_face.jpg"
      //             class="img img-rounded img-fluid"
      //           />
      //           <p class="text-secondary text-center">15 Minutes Ago</p>
      //         </div>
      //         <div class="col-md-10">
      //           <p>
      //             <Link
      //               class="float-left"
      //               to="https://maniruzzaman-akash.blogspot.com/p/contact.html"
      //             >
      //               <strong>Maniruzzaman Akash</strong>
      //             </Link>
      //             <span class="float-right">
      //               <i class="text-warning fa fa-star" />
      //             </span>
      //             <span class="float-right">
      //               <i class="text-warning fa fa-star" />
      //             </span>
      //             <span class="float-right">
      //               <i class="text-warning fa fa-star" />
      //             </span>
      //             <span class="float-right">
      //               <i class="text-warning fa fa-star" />
      //             </span>
      //           </p>
      //           <div class="clearfix" />
      //           <p>
      //             Lorem Ipsum is simply dummy text of the pr make but also the
      //             leap into electronic typesetting, remaining essentially
      //             unchanged. It was popularised in the 1960s with the release of
      //             Letraset sheets containing Lorem Ipsum passages, and more
      //             recently with desktop publishing software like Aldus PageMaker
      //             including versions of Lorem Ipsum.
      //           </p>
      //           <p>
      //             <Link class="float-right btn btn-outline-primary ml-2">
      //               {" "}
      //               <FontAwesomeIcon icon={faReply} /> Reply
      //             </Link>
      //             <Link class="float-right btn text-white btn-danger">
      //               {" "}
      //               <FontAwesomeIcon icon={faThumbsUp} /> Like
      //             </Link>
      //           </p>
      //         </div>
      //       </div>
      //       <div class="card card-inner">
      //         <div class="card-body">
      //           <div class="row">
      //             <div class="col-md-2">
      //               <img
      //                 alt=""
      //                 src="https://image.ibb.co/jw55Ex/def_face.jpg"
      //                 class="img img-rounded img-fluid"
      //               />
      //               <p class="text-secondary text-center">15 Minutes Ago</p>
      //             </div>
      //             <div class="col-md-10">
      //               <p>
      //                 <Link to="https://maniruzzaman-akash.blogspot.com/p/contact.html">
      //                   <strong>Maniruzzaman Akash</strong>
      //                 </Link>
      //               </p>
      //               <p>
      //                 Lorem Ipsum is simply dummy text of the pr make but also
      //                 the leap into electronic typesetting, remaining
      //                 essentially unchanged. It was popularised in the 1960s
      //                 with the release of Letraset sheets containing Lorem Ipsum
      //                 passages, and more recently with desktop publishing
      //                 software like Aldus PageMaker including versions of Lorem
      //                 Ipsum.
      //               </p>
      //               <p>
      //                 <Link class="float-right btn btn-outline-primary ml-2">
      //                   {" "}
      //                   <i class="fa fa-reply" /> Reply
      //                 </Link>
      //                 <Link class="float-right btn text-white btn-danger">
      //                   {" "}
      //                   <i class="fa fa-heart" /> Like
      //                 </Link>
      //               </p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
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
