import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
user:string=""
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user")).name;
  }

}
