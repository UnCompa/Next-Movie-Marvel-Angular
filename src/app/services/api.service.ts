import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://whenisthenextmcufilm.com/api"

  private http = inject(HttpClient)

  getMovie<T>() {
    return this.http.get<T>(this.baseUrl)
  }
}
