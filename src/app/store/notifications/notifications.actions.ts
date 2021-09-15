import {Action} from '@ngrx/store';

export enum NotificationsActionTypes {
  GET_ITEMS = '[Notifications] getItems',
  SET_ITEMS = '[Notifications] setCategories',
  GET_TOASTS = '[Notifications] getToasts',
  SET_TOAST = '[Notifications] setToast',
  CLEAR_TOASTS = '[Notifications] clearToasts',
  NEW_TASK_CALL = '[Notifications] newTaskCall',
  NEW_CASH_OPERATION = '[Notifications] newCashOperation',
  NOTIFY_WARNING = '[Notifications] notify_warning',
  NOTIFY_ERROR = '[Notifications] notify_error',
  NOTIFY_SUCCESS = '[Notifications] notify_success',
  NOTIFY_CLEAR = '[Notifications] notify_clear',
}

export class GetItemsAction implements Action {
  readonly type = NotificationsActionTypes.GET_ITEMS;

  constructor(public payload?: string) {
  }
}

export class SetItemsAction implements Action {
  readonly type = NotificationsActionTypes.SET_ITEMS;

  constructor(public payload: string) {
  }
}

export class GetToastsAction implements Action {
  readonly type = NotificationsActionTypes.GET_TOASTS;

  constructor(public payload?: any) {
  }
}

export class SetToastAction implements Action {
  readonly type = NotificationsActionTypes.SET_TOAST;

  constructor(public payload: any) {
  }
}

export class ClearToastsAction implements Action {
  readonly type = NotificationsActionTypes.CLEAR_TOASTS;

  constructor(public payload?: any) {
  }
}

export class NotifyWarningAction implements Action {
  readonly type = NotificationsActionTypes.NOTIFY_WARNING;

  constructor(public detail: string = 'Действие не может быть произведено', public summary = 'Предупреждение', public life = 5000, public closable = true) {
  }
}

export class NotifyErrorAction implements Action {
  readonly type = NotificationsActionTypes.NOTIFY_ERROR;

  constructor(public detail: string = 'Действие не может быть произведено', public summary = 'Ошибка', public life = 10000, public closable = true) {
  }
}

export class NotifySuccessAction implements Action {
  readonly type = NotificationsActionTypes.NOTIFY_SUCCESS;

  constructor(public detail: string = 'Изменения внесены', public summary = 'Сохранено', public life = 3000, public closable = true) {
  }
}

export class NotifyClearAction implements Action {
  readonly type = NotificationsActionTypes.NOTIFY_CLEAR;

  constructor() {
  }
}


export class TaskCallNewAction implements Action {
  readonly type = NotificationsActionTypes.NEW_TASK_CALL;

  constructor(public payload: any) {
  }
}

export class CashOperationNewAction implements Action {
  readonly type = NotificationsActionTypes.NEW_CASH_OPERATION;

  constructor(public payload: any) {
  }
}


export type NotificationsActionsUnion =
  GetItemsAction
  | SetItemsAction
  | GetToastsAction
  | SetToastAction
  | ClearToastsAction
  | TaskCallNewAction
  | CashOperationNewAction
  | NotifyWarningAction
  | NotifyErrorAction
  | NotifySuccessAction
  | NotifyClearAction
  ;
