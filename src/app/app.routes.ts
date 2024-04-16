// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RessourcesHumainesComponent } from './ressources-humaines/ressources-humaines.component';

const routes: Routes = [
  // Other routes...
  { path: 'ressources-humaines', component: RessourcesHumainesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
