import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss','./mobile.component.scss']
})
export class NavBarComponent {

  logo = '7';

  name = 'cademy'

  toggle(){
    localStorage.clear()
  }
}
