import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as actions from './notifications.actions';
import {NotifyClearAction} from './notifications.actions';
import {map, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {EchoesState} from 'src/app/store/reducers';
import { ToastController } from '@ionic/angular';

@Injectable()
export class NotificationsEffects {

  @Effect()
  successNotify$ = this.actions$.pipe(
    ofType(actions.NotificationsActionTypes.NOTIFY_SUCCESS),
    withLatestFrom(this.store),
    map(([action, state]) => {
      this.addMessage('success', action.detail, action.summary, action.life, action.closable);
      return new NotifyClearAction();
    })
  );

  @Effect()
  warnNotify$ = this.actions$.pipe(
    ofType(actions.NotificationsActionTypes.NOTIFY_WARNING),
    withLatestFrom(this.store),
    map(([action, state]) => {
      this.addMessage('warning', action.detail, action.summary, action.life, action.closable);
      return new NotifyClearAction();
    })
  );

  @Effect()
  errNotify$ = this.actions$.pipe(
    ofType(actions.NotificationsActionTypes.NOTIFY_ERROR),
    withLatestFrom(this.store),
    map(([action, state]) => {
      this.addMessage('danger', action.detail, action.summary, action.life, action.closable);
      return new NotifyClearAction();
    })
  );

  constructor(
    private actions$: Actions<actions.NotificationsActionsUnion>,
    private store: Store<EchoesState>,
    public toastController: ToastController
  ) {
  }

  private addMessage(severity: string, detail: string, summary: string, life: number, closable: boolean) {
    const toastItem = {
      color: severity,
      header: summary,
      message: detail,
      duration: life,
      buttons: [
        {
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    };
    console.log(toastItem);
    this.toastController.create(toastItem).then(res => res.present());
  }
}
