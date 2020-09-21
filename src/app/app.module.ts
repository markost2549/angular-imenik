import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImenikListComponent } from './imenik/imenik-list/imenik-list.component';
import { ImenikFilterPipe } from './imenik/imenik-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImenikEditComponent } from './imenik/imenik-edit/imenik-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ImenikListComponent,
    ImenikFilterPipe,
    ImenikEditComponent,
    LoadingSpinnerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
