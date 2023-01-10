import {PostsStateInterface} from "../interfaces/posts-state.interface";
import {createReducer, on} from "@ngrx/store";
import {getPosts, getPostsFailure, getPostsSuccess} from "./actions";

export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null
};

export const reducers = createReducer(
  initialState,
  on(getPosts, (state) => ({
    ...state, isLoading: true
  })),

  on(getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts
  })),

  on(getPostsFailure, (state, action) => ({
    ...state, isLoading: false, error: action.error
  })),
);
