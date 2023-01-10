import {createAction, props} from "@ngrx/store";
import {ErrorInterface, PostsInterface} from "../interfaces/posts.interface";

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction('[Posts] Get Posts success',
  props<PostsInterface>()
);
export const getPostsFailure = createAction('[Posts] Get Posts failure',
  props<ErrorInterface>()
);
