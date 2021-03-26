import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

//import { HomeComponent } from './home/home.component';
//import { SearchComponent } from './search/search.component';
//import { ResultsComponent } from './results/results.component';
//import { OntologiesComponent } from './components/ontologies/ontologies.component';
//import { BrowseComponent } from './browse/browse.component';
//import { LoginErrorComponent } from "./components/login-error/login-error.component";
//import { AuthGuardService as AuthGuard } from "./services/authorization/auth-guard.service";




const appRoutes =[
  /*{
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    children: [ {
      path: 'results',
      component: ResultsComponent,
      data: {animation: 'ResultsPage'},
      canActivate:[AuthGuard]
    },
    {
      path: 'ontologies',
      component: OntologiesComponent,
      data: {animation: 'ResultsPage'},
      canActivate:[AuthGuard]
    },
    {
      path: 'browse/:iri/:ontologyIri/:matched',
      component: BrowseComponent,
      data: {animation: 'BrowsePage'},
      canActivate:[AuthGuard]
    }]
  },
  {
    path:"loginerror",
    component:LoginErrorComponent
  }*/
];



@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule{

}
