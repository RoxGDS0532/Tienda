import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/components/user/user.component';

bootstrapApplication(UserComponent, {
  providers: [provideRouter(appRoutes)]  // Configura las rutas
})
.catch(err => console.error(err));