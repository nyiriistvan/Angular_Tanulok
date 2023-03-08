/* 
 File: app.component.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-03-08
 Github: https://github.com/nyiriistvan/
 Licenc: GNU GPL
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tanulok';
students: any;
scores: any;
}
