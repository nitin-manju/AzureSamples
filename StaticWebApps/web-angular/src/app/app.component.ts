import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-angular';
  apiResult = "";
  constructor()
  {
    this.callApi();
  }

  async callApi(){
    this.apiResult  = await (await fetch(`/api/HttpExample`)).json();
  }
}
