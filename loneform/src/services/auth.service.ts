import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl="http://lab.thinkoverit.com/api";


 
// post(url:string): Observable<any> {
//     const headers = { 'content-type': 'application/json'}  
//     const body=JSON.stringify(url);
 
//     return this.http.post(this.baseUrl + url, body,{'headers':headers , observe: 'response'})

post(url: string, data: any): Observable<any> {
  return new Observable((subscriber) => {
    let headers= { 'content-type': 'application/json'} 
    //let headers = new HttpHeaders().set('X-Authorization', 'Bearer  ' + localStorage.getItem('token')).set('X-Requested-With', 'XMLHttpRequest').set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + url, JSON.stringify(data), {headers}).subscribe(data => {
      subscriber.next(data);
    }, (err) => {
      subscriber.error(err);
    });
  });
}
}
