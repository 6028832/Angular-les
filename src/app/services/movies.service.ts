import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getData(searchTerm: string): Observable<any> {
    const apiUrl = `http://www.omdbapi.com/?s=${searchTerm}&apikey=f7686b16`;
    return this.http.get(apiUrl);
  }
}
