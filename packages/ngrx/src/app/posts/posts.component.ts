import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getPosts} from "./store/actions";
import {isLoadingSelector} from "./store/selectors";
import {Observable} from "rxjs";
import {AppStateInterface} from "./interfaces/app-state.interface";
// import * as PostActions from "./store/actions";

@Component({
  selector: 'teaching-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public isLoading: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading = this.store.pipe(select(isLoadingSelector))
  }

  public ngOnInit(): void {
   this.store.dispatch(getPosts());
  }
}
