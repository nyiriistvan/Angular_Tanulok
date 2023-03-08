/*
 File: tanulok.component.ts
 Author: Nyiri István
 Copyright: 2023, Nyiri István
 Group: Szoft_II_N
 Date: 2023-03-08
 Github: https://github.com/nyiriistvan/
 Licenc: GNU GPL
 */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-tanulok',
  templateUrl: './tanulok.component.html',
  styleUrls: ['./tanulok.component.scss']
})
export class TanulokComponent implements OnInit {

  students:any = [];
  scores:any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getScores();
  }

  getStudents() {

    this.api.getStudents().subscribe({
      next: (students) => {
        console.log(students)
        this.students = students;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }

  getScores() {

    this.api.getStudents().subscribe({
      next: (scores) => {
        console.log(scores)
        this.scores = scores;
      },
      error: (err) => {
        console.log('Hiba! A REST API elérése sikertelen!')
        console.log(err)
      }
    });
  }

}
