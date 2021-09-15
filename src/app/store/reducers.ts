import { ActionReducerMap } from '@ngrx/store';

import { notificationsReducer } from './notifications';
import { ErrorsActionTypes, errorsReducer } from './errors';

export interface EchoesState {
  notificationsReducer: any;
  errorsReducer: any;
}

export let EchoesReducers: ActionReducerMap<EchoesState> = {
  notificationsReducer,
  errorsReducer,
};

export let EchoesActions = [ErrorsActionTypes];
