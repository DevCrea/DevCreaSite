import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {HomeComponent} from "./tab-menus/home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {Button} from "primeng/button";
import {ProjectsComponent} from "./tab-menus/projects/projects.component";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {ResumeComponent} from "./tab-menus/resume/resume.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
      ResumeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,

    Button,
    CardModule,
    TagModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
