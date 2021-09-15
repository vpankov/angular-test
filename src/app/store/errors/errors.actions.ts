import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class ErrorsActionTypes {
  static GET_ERRORS = '[Errors] getItems';
  static SET_ERRORS = '[Errors] setCategories';
  static ADD_ERROR = '[Errors] addItems';
  static REMOVE_ERROR = '[Errors] removeItems';
}

export class GetErrorsAction implements Action {
  readonly type = ErrorsActionTypes.GET_ERRORS;

  constructor(public payload?: string) {
  }
}

export class SetErrorsAction implements Action {
  readonly type = ErrorsActionTypes.SET_ERRORS;

  constructor(public payload: string) {
  }
}

export class AddErrorAction implements Action {
  readonly type = ErrorsActionTypes.ADD_ERROR;

  constructor(public payload: any) {
  }
}

export class RemoveErrorAction implements Action {
  readonly type = ErrorsActionTypes.REMOVE_ERROR;

  constructor(public payload: any) {
  }
}


export type ErrorsActionsUnion =
  GetErrorsAction |
  SetErrorsAction |
  AddErrorAction |
  RemoveErrorAction
  ;
