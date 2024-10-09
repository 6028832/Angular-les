import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Work } from '../../interfaces/work'
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  albertHeijn : Work = {
    id: 1,
    work_name: "Albert Heijn",
    start_date: new Date(2022, 0 , 6),
    end_date: new Date()
  }
}
