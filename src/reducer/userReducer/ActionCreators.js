import {
  ADD_POST,
  ADD_USER,
  DELETE_ALL_POST,
  DELETE_POST,
  EDIT_POST,
} from "./ActionTypes";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  };
}
export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post,
  };
}
export function deletePost(postId) {
  return {
    type: DELETE_POST,
    payload: postId,
  };
}
export function deleteAllPost() {
  return {
    type: DELETE_ALL_POST,
  };
}
