import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImenikListComponent } from './imenik/imenik-list/imenik-list.component';
import { ImenikEditComponent } from './imenik/imenik-edit/imenik-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/imenik', pathMatch: 'full' },
  { path: 'imenik', component: ImenikListComponent },
  { path: 'imenik/new', component: ImenikEditComponent },
  { path: 'imenik/edit/:id', component: ImenikEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
