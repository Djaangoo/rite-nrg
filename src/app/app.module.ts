import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { teamsFeatureKey, teamsReducer } from './store/teams/teams.reducer';
import { TeamsEffects } from './store/teams/teams.effects';
import { UsersEffects } from './store/users/users.effects';
import { usersFeatureKey, usersReducer } from './store/users/users.reducer';
import { currentUserFeatureKey, currentUserReducer } from './store/current-user/current-user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [teamsFeatureKey]: teamsReducer,
      [usersFeatureKey]: usersReducer,
      [currentUserFeatureKey]: currentUserReducer,
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([TeamsEffects, UsersEffects]),
    CoreModule,
    ViewsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
