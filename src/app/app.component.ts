import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'dev_crea_website';
  //@ts-ignore
  items: MenuItem[];

  //@ts-ignore
  activeItem: MenuItem;
  constructor(private _primengConfig: PrimeNGConfig,
              private _router: Router) {
    this.defineMenu();
  }

  defineMenu(){
    this._primengConfig.ripple=true;
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Projets',
        icon: 'pi pi-th-large',
        routerLink: '/projects',
      },
      {
        label: 'Mon CV',
        icon: 'pi pi-briefcase',
        routerLink: '/resume',
      }
    ];
    this.activeItem = this.items[0];
  }

  ngOnInit(){
    this.defineMenu();
  }
  home(){
    this._router.navigateByUrl("/home");
  }
}
