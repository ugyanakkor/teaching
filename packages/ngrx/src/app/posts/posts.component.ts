import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getPosts} from "./store/actions";
// import * as PostActions from "./store/actions";

@Component({
  selector: 'teaching-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private store: Store) {}

  public ngOnInit(): void {
   this.store.dispatch(getPosts());
  }
}
