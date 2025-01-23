import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListUserComponent } from "./features/User/presentation/list-users/page/list-user/list-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularArchitecture';
}
