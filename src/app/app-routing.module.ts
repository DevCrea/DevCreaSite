import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./tab-menus/home/home.component";
import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./tab-menus/projects/projects.component";
import {ResumeComponent} from "./tab-menus/resume/resume.component";


const routes: Routes = [
    {
        path: 'projects', component: ProjectsComponent,
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'resume', component: ResumeComponent,
    },
    {
        path:'', redirectTo: '/home', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}