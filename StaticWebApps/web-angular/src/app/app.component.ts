import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiResult = "...";
  constructor()
  {
    this.callApi();
  }

  async callApi(){
    var result =  await (await fetch(`/api/message`)).json();
    this.apiResult = result.text;
  }
}
