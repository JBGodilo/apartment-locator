import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export * from './actions/property-lists.action';
export * from './reducers/property-lists.reducer';
export * from './selectors/property-lists.selector';