import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  searchTerm: string = '';
  movies: any;

  constructor(private moviesService: MoviesService) {}

  searchMovies() {
    this.moviesService.getData(this.searchTerm).subscribe(data => {
      console.log(data); 
      this.movies = data.Search;
      console.log(this.movies); 
    });
  }
}