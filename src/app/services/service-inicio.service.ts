import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceInicioService {




  constructor(private http: HttpClient) { }


  // traer(){
  //   this.http.get(base_url,)
  // }
}
