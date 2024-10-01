import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  isAdmin : boolean = false;
  classAdmin : string ="navbar navbar-expand-lg navbar-light bg-light"
  classNotAdmin : string = "navbar navbar-expand-lg navbar-dark bg-dark"

}
