import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { RessourcesHumainesComponent } from './ressources-humaines/ressources-humaines.component';

const routes: Routes = [
  // Other routes...
  { path: 'ressources-humaines', component: RessourcesHumainesComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
