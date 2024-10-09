import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
  
})


export class HomeComponent {
  user : User ={
    id: 1,
    name: "Matthijs de Graaf",
    adres: "2222 PP",
    email: "6028832@mborijnland.nl",
    foto: "https://material.angular.io/assets/img/examples/shiba1.jpg"
  };
}
