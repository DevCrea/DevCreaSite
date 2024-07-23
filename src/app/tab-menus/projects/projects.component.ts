import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./../../app.component.css', 'projects.component.css']
})
/**
 * Class ProjectsComponent
 */
export class ProjectsComponent implements OnInit{
  cards:{header: string; tags: string[]; imgSrc: string; description: string; link: string}[]=[];
  constructor(private _router: Router) {
    this.defineCards();
  }
  ngOnInit(): void {
    this.defineCards()
  }

  defineCards(){
    this.cards = [
        {
          header: "NestMC",
          tags: ['CSS','JAVA'],
          imgSrc: "https://serveur-prive.net/storage/servers/thumbnail/63d88482bf60156dffc5fd2f3075a678.jpg",
          description: "Site WEB avec système de vote et d'achat d'articles pour un serveur Minecraft",
          link:""
        },
      {
        header: "NestCloudSystem",
        tags:['JAVA'],
        imgSrc: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
        description: "Dans le cadre du développement d'un serveur Minecraft, ce système de gestion mutli-proxy/serveurs à vue le jour.",
        link:""
      },
      {
        header: "MP44",
        tags:['FLUTTER','JAVA', 'C#', 'ANGULAR', 'SPRINGBOOT', 'POSTGRESQL','AWS'],
        imgSrc: "https://media.licdn.com/dms/image/C4E0BAQEShqafJ_9Ybw/company-logo_200_200/0/1669914387264/solis_security_logo?e=1729728000&v=beta&t=Y7-xTAPXXE5FigUpLbvwVKzTiUsbnk5II-c-hjGpVsI",
        description: "Un smartphone géant possédant son store d'applications destiné aux professionnels, dont une régie publicitaire",
        link:"https://www.store44.fr/"
      },
      {
        header:'Pokédex',
        tags:['ANGULAR'],
        imgSrc: "https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg",
        description: "Un projet d'apprentissage de Angular visant à créer un Pokédex permettant d'ajouter, éditer, supprimer des pokémons",
        link:"https://ng-pokemon-app-9b6bd.web.app/pokemons"
      }
    ]
  }

}
