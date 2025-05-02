import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationBarComponent, RegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roomza-connect';
}
