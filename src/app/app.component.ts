import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IMovie } from './models/apiMovie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido a styleUrls
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {}

  title = 'next-movie-marvel';
  datos: IMovie = {
    title: '',
    type: '',
    release_date: '',
    poster_url: '',
    id: 0,
    overview: '',
    days_until: 0
  }

  ngOnInit(): void {
  this.api.getMovie<IMovie>().subscribe(data => this.datos = data);    
  console.log(this.datos);
  
  }
}

