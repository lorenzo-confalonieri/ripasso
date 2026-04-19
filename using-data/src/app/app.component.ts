import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HelloWordComponent, UserItemComponent,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'using-data';
}

