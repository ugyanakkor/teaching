import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostsComponent } from './posts.component';
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [PostsComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature('posts', reducers)
  ],
})
export class PostsModule {}
