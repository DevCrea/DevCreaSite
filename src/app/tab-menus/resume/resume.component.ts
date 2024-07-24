import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./../../app.component.css','./resume.component.css']
})
/**
 * Class ResumeComponent
 */
export class ResumeComponent implements OnInit{
  constructor(private _router: Router) {

  }
  ngOnInit(): void {
  }

  downloadResume() {
    let resume = document.createElement('a');
    resume.setAttribute('type','hidden');
    resume.href = './../assets/CV_professionnel.pdf';
    resume.download = 'Resume_Garnier_Steven'
    document.body.appendChild(resume);
    resume.click();
    resume.remove();
  }
}
