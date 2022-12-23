import {
  ADD_POST,
  ADD_USER,
  DELETE_ALL_POST,
  DELETE_POST,
  EDIT_POST,
} from "./ActionTypes";

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        business_license: action.payload.business_license,
        estate_name: action.payload.estate_name,
        posts: [...action.payload[0].posts],
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { ...action.payload }],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...action.payload } : { ...post }
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case DELETE_ALL_POST:
      return {
        ...state,
        posts: [],
      };
  }
};

export default userReducer;
