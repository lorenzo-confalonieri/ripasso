import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserItemComponent } from './user-item/user-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HelloWordComponent, UserItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'using-data';
}

