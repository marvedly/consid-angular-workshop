import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import { userFeature } from './with-ngrx/state/user/user.reducer';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {UserEffects} from "./with-ngrx/state/user/user.effects";
import {FormatArrayPipe} from "./with-ngrx/shared/pipes/format-array.pipe";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      user: userFeature.reducer
    }),
    provideEffects(UserEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    FormatArrayPipe
],
};
