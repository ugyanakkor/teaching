import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostsComponent } from './posts.component';
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PostsEffects} from "./store/effects";
import {PostsService} from "./posts.service";

@NgModule({
  declarations: [PostsComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [
    PostsService
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule {}
