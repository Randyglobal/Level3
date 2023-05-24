import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss','./mobile.component.scss']
})
export class NavComponent {

  logo = '7';

  name = 'cademy'

  toggle(){
    localStorage.clear()
  }
}
