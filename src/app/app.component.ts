import { Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'taskmgr';
  darkTheme = false;
  squareState: string;

  constructor(private oc: OverlayContainer, @Inject('BASE_CONFIG') config){

  }

  switchTheme(dark){
    this.darkTheme = dark;
  }

}
