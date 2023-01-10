import {PostInterface} from "./posts.interface";

export interface PostsStateInterface {
  isLoading: boolean;
  posts: Array<PostInterface>
  error: string |null;
}
