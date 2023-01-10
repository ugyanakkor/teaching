export interface PostInterface {
  id: number;
  title: string;
}

export interface PostsInterface {
  posts: Array<PostInterface>
}

export interface ErrorInterface {
  error: string;
}
