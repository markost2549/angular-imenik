import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imenik } from './imenik.model';

@Injectable({
  providedIn: 'root',
})
export class ImenikService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getImeniks(): Observable<Imenik[]> {
    return this.http.get<Imenik[]>(this.baseUrl + '/imenik', this.httpOptions);
  }

  getImenikById(id: number): Observable<Imenik> {
    return this.http.get<Imenik>(
      this.baseUrl + '/imenik/' + id,
      this.httpOptions
    );
  }

  updateImenik(imenik: Imenik, id: number): Observable<Imenik> {
    return this.http.put<Imenik>(
      this.baseUrl + '/imenik/' + id,
      imenik,
      this.httpOptions
    );
  }

  deleteImenik(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/imenik/' + id, this.httpOptions);
  }
}
