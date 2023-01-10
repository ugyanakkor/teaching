import {createAction, props} from "@ngrx/store";
import {ErrorInterface, PostsInterface} from "../interfaces/posts.interface";

export const getPosts = createAction('[Posts] Get Posts');
// Actions for effects
/*export const getPostsSuccess = createAction('[Posts] Get Posts success',
  props<PostsInterface>()
);
export const getPostsFailure = createAction('[Posts] Get Posts failure',
  props<ErrorInterface>()
);*/
