import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  names: string[];
  constructor() {   // funzione che viene eseguita quando viene creato l'oggetto
    this.names = ['Ari','Carlos','Felipe','Nate']; //riempiamo il vettore
  
  }
  ngOnInit(){
  }
}
