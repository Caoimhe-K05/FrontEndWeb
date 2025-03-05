import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importing httpclient
import { Observable } from 'rxjs';//importing observable 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { } 

  
  getStudentData():Observable<any>{//getting the student data
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1346788279349075968');//student data stored in this url
  }

  getWeatherdata():Observable<any>{//getting the weather data
    return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1346800004911783936');//weather data stored in this url
  }
}
