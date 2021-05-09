import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currentUserFeatureKey, ICurrentUserState } from './current-user.reducer';

export const selectorCurrentUserFeature = createFeatureSelector<ICurrentUserState>(currentUserFeatureKey);

const getCurrentUserData = createSelector(selectorCurrentUserFeature, (state: ICurrentUserState) => {
  return state.data;
});

export { getCurrentUserData };
