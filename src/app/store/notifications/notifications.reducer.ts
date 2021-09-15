import {
  NotificationsActionsUnion,
  NotificationsActionTypes,
} from './notifications.actions';
import { EchoesState } from '../reducers';
import { createSelector } from '@ngrx/store';

const initialState: any = {
  items: {},
  toast: {},
  notifies: [],
  task_calls: null,
  cash_operation: null,
};

export const notificationsReducer = (
  state: any = initialState,
  action: NotificationsActionsUnion
): any => {
  switch (action.type) {
    case NotificationsActionTypes.GET_ITEMS: {
      return Object.assign({}, state);
    }
    case NotificationsActionTypes.SET_ITEMS: {
      return Object.assign({}, state, { items: action.payload });
    }
    case NotificationsActionTypes.SET_TOAST: {
      return Object.assign({}, state, { toast: action.payload });
    }
    case NotificationsActionTypes.NOTIFY_SUCCESS:
    case NotificationsActionTypes.NOTIFY_ERROR:
    case NotificationsActionTypes.NOTIFY_CLEAR:
    case NotificationsActionTypes.NOTIFY_WARNING: {
      return state;
    }

    case NotificationsActionTypes.CLEAR_TOASTS: {
      return Object.assign({}, state, { toast: {} });
    }
    case NotificationsActionTypes.NEW_TASK_CALL: {
      return Object.assign({}, state, { task_calls: action.payload });
    }
    case NotificationsActionTypes.NEW_CASH_OPERATION: {
      return Object.assign({}, state, { cash_operation: action.payload });
    }
    default:
      return { ...initialState, ...state };
  }
}

export const getNotifications = (state: EchoesState) =>
  state.notificationsReducer;
export const getItems = createSelector(
  getNotifications,
  (state: any) => state.items
);
export const getToasts = createSelector(
  getNotifications,
  (state: any) => state.toast
);
export const getTaskCalls = createSelector(
  getNotifications,
  (state: any) => state.task_calls
);
export const getCash = createSelector(
  getNotifications,
  (state: any) => state.cash_operation
);
