import {PostsStateInterface} from "../interfaces/posts-state.interface";
import {createReducer, on} from "@ngrx/store";
import {getPosts} from "./actions";

export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null
};

export const reducers = createReducer(
  initialState,
  on(getPosts, (state) => ({
    ...state, isLoading: true
  }))
);
