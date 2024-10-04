import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://whenisthenextmcufilm.com/api";
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  getMovie<T>() {
    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    if (isPlatformBrowser(this.platformId)) {
      return this.http.get<T>(this.baseUrl, { headers });
    } else {
      // Manejo de solicitudes en el servidor
      return this.http.get<T>(this.baseUrl, { headers });
    }
  }
}
