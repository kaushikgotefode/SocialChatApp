import { ADD_POST, GET_POSTS, GET_POST } from "./../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        post: action.payload
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        posts: state.posts.map(item =>
          item._id === action.payload._id ? action.payload : item
        ),
        post: action.payload
      };
    default:
      return state;
  }
}
