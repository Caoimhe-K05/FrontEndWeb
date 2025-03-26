import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//importing httpclient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }//constructor for the httpclient

  getMovieData():Observable<any>{
    //getMovieData method
    return this.httpClient.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');//importing file
  }
}
