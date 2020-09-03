import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Imenik } from './imenik-list/imenik.model';

@Injectable({
  providedIn: 'root',
})
export class ImenikService {
  baseUrl = 'http://10.0.0.6:3000';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getImenik(): Observable<Imenik | any> {
    return this.http
      .get<Imenik>(this.baseUrl + '/imenik/')
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // Error handling
  private errorHandle(error): any {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
