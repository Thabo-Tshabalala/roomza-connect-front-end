import { Component } from '@angular/core';
import { RegistrationPageComponent } from "../registration-page/registration-page.component";

@Component({
  selector: 'app-landing-page',
  imports: [RegistrationPageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
