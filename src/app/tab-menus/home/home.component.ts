import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../app.component.css','./home.component.css']
})
/**
 * Class HomeComponent
 */
export class HomeComponent implements OnInit{
  constructor(private _router: Router) {

  }
  ngOnInit(): void {
  }

}
