import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPropertyListsState } from "./property-lists.reducer";

const getPropertyListsState = createFeatureSelector<IPropertyListsState>('propertyLists');

export const allPropertyLists = createSelector(getPropertyListsState, (state: IPropertyListsState) => {
  return state;
});

