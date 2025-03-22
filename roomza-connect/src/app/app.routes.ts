import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

export const routes: Routes = [
    {path:'',component: LandingPageComponent},
    {path:'',component:NavigationBarComponent},
    {path:'register', component:RegistrationPageComponent}
];
