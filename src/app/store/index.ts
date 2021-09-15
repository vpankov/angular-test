import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EchoesActions, EchoesReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NotificationsEffects } from './notifications/notifications.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(EchoesReducers),
    EffectsModule.forRoot([NotificationsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: !environment.production,
    }),
  ],
  declarations: [],
  exports: [],
  providers: [...EchoesActions],
})
export class CoreStoreModule {}
