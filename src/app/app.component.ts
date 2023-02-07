import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HostListner';

  active: boolean=false;


  display: boolean=false;

  occupation:string='teacher';

  DisplayNotice(){
    this.display=true;
  }
}
