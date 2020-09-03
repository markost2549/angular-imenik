import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ImenikListComponent } from './imenik/imenik-list/imenik-list.component';

const appRoutes: Routes = [{ path: '', component: ImenikListComponent }];

@NgModule({})
export class AppRoutingModule {}
