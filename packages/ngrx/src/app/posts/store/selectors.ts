import {AppStateInterface} from "../interfaces/app-state.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
