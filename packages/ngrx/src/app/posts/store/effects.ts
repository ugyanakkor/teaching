import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getPosts, /* getPostsFailure, getPostsSuccess*/} from "./actions";
import {PostsService} from "../posts.service";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class PostsEffects {
  constructor(private actions: Actions, private postsService: PostsService) {}

 /* public getPosts = createEffect(() =>
    this.actions.pipe(
      ofType(getPosts),
      mergeMap(() => {
        return this.postsService.getPosts()
          .pipe(
            map(posts => getPostsSuccess({posts})),
            catchError((error) =>
              of(getPostsFailure({error: error.message}))
            )
          );
      }))
  );*/
}
