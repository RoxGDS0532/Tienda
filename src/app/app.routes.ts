import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

export const routes: Routes = [
    {path: '', component: UserComponent}
];
