import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SchoolComponent } from './pages/school/school.component';
import { WorkComponent } from './pages/work/work.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, 
        title: 'Home'
    },
    {
        path: 'details',
        component: DetailsComponent, 
        title: 'Details'
    },
    {
        path: 'school',
        component: SchoolComponent,
        title: 'School'
    },
    {
        path: 'movies',
        component: MoviesComponent,
        title: 'Movies'
    },
    {
        path: 'work',
        component: WorkComponent,
        title: 'Work'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
