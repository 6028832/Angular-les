import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { School } from '../../interfaces/school';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss'
})

export class SchoolComponent {
  school: School = {
    id: 1,
    school_name: "Northgo-College",
    start_date: new Date(2018, 0, 1), 
    end_date: new Date(2022, 1, 1),
    foto: "../../public/northgo.jpg",
  };

  secondSchool: School = {
    id: 2,
    school_name: "De vos",
    start_date: new Date(2010, 0, 1), 
    end_date: new Date(2018, 1, 1),
    foto: "../../public/devos.jpg",
  };
}
