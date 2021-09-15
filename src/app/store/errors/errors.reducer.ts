import { ErrorsActionsUnion, ErrorsActionTypes } from './errors.actions';
import { EchoesState } from '../reducers';
import { createSelector } from '@ngrx/store';

const initialState: any = {
  items: [],
};

export const errorsReducer = (
  state: any = initialState,
  action: ErrorsActionsUnion
): any => {
  switch (action.type) {
    case ErrorsActionTypes.GET_ERRORS: {
      return Object.assign({}, state);
    }
    case ErrorsActionTypes.SET_ERRORS: {
      return Object.assign({}, state, { items: action.payload });
    }
    case ErrorsActionTypes.ADD_ERROR: {
      state.items = [...state.items, action.payload];
      return Object.assign({}, state, { items: state.items });
    }
    case ErrorsActionTypes.REMOVE_ERROR: {
      let list = state.items.slice();
      list = [];
      return Object.assign({}, state, { items: list });
    }
    default:
      return { ...initialState, ...state };
  }
};

export const getErrors = (state: EchoesState) => state.errorsReducer;
export const getItems = createSelector(getErrors, (state: any) => state.items);
